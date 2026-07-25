#!/bin/sh
# Vercel build with lockfile-keyed plugin caching.
#
# Vercel restores its build cache (including .quartz/plugins) between builds.
# Reusing those cached plugins is fast, but they go stale when a plugin's pinned
# commit changes — which is exactly when quartz.lock.json changes. So: reuse the
# cache while the lockfile hash is unchanged; wipe + reinstall fresh when it moves.
#
# If the hash can't be computed (lockfile missing/unreadable, or no sha1sum/shasum),
# HASH is empty and we fall back to a fresh install — never a false cache hit.
set -e

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
