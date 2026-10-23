#!/bin/sh
# Vercel build with lockfile-keyed plugin caching.
#
# Vercel's build cache only holds node_modules/** for projects without a
# framework preset, so .quartz/plugins (and og-image's fonts) are parked in
# node_modules/.cache/ between builds (vercel-install.sh carries it across `npm ci`). Reusing those cached
# plugins is fast, but they go stale when a plugin's pinned commit changes —
# which is exactly when quartz.lock.json changes. So: reuse the cache while the
# lockfile hash is unchanged; wipe + reinstall fresh when it moves.
#
# If the hash can't be computed (lockfile missing/unreadable, or no sha1sum/shasum),
# HASH is empty and we fall back to a fresh install — never a false cache hit.
set -e

CACHE=node_modules/.cache/quartz-plugins
if [ -d "$CACHE" ] && [ ! -e .quartz/plugins ]; then
  mkdir -p .quartz
  mv "$CACHE" .quartz/plugins
fi

# og-image keeps the Google Fonts it fetches in quartz/.quartz-cache/fonts, which
# Vercel discards; carry it in node_modules/.cache too. (OG images themselves
# are cached by the plugin directly in node_modules/.cache/og-images.)
FONTS=node_modules/.cache/quartz-fonts
if [ -d "$FONTS" ] && [ ! -e quartz/.quartz-cache/fonts ]; then
  mkdir -p quartz/.quartz-cache
  cp -R "$FONTS" quartz/.quartz-cache/fonts
fi

HASH=$( (sha1sum quartz.lock.json 2>/dev/null || shasum quartz.lock.json 2>/dev/null) | cut -c1-12 )
MARKER=.quartz/plugins/.lockhash

if [ -n "$HASH" ] && [ -f "$MARKER" ] && [ "$(cat "$MARKER")" = "$HASH" ]; then
  echo "vercel-build: quartz.lock.json unchanged ($HASH) — reusing cached plugins"
else
  [ -n "$HASH" ] || echo "vercel-build: could not hash quartz.lock.json — forcing fresh install"
  echo "vercel-build: fresh plugin install"
  rm -rf .quartz/plugins
fi

# --clean skips plugins whose directory already exists (cache hit) and clones any
# that are missing (cache miss / after a wipe).
npx quartz plugin install --clean

# Persist the marker only when we have a real hash; otherwise clear any stale one
# so the next build never treats an empty hash as a cache hit.
mkdir -p .quartz/plugins
if [ -n "$HASH" ]; then
  printf %s "$HASH" > "$MARKER"
else
  rm -f "$MARKER"
fi

npx quartz build

# Park the plugins and fonts where Vercel's build cache keeps them for the next build.
rm -rf "$CACHE"
mkdir -p "$(dirname "$CACHE")"
mv .quartz/plugins "$CACHE"
if [ -d quartz/.quartz-cache/fonts ]; then
  rm -rf "$FONTS"
  cp -R quartz/.quartz-cache/fonts "$FONTS"
fi
