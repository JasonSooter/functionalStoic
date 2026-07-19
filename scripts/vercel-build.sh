#!/bin/sh
# Vercel build with lockfile-keyed plugin caching.
#
# Vercel restores its build cache (including .quartz/plugins) between builds.
# Reusing those cached plugins is fast, but they go stale when a plugin's pinned
# commit changes — which is exactly when quartz.lock.json changes. So: reuse the
# cache while the lockfile hash is unchanged; wipe + reinstall fresh when it moves.
set -e

HASH=$( (sha1sum quartz.lock.json 2>/dev/null || shasum quartz.lock.json) | cut -c1-12 )
MARKER=.quartz/plugins/.lockhash

if [ "$(cat "$MARKER" 2>/dev/null)" = "$HASH" ]; then
  echo "vercel-build: quartz.lock.json unchanged ($HASH) — reusing cached plugins"
else
  echo "vercel-build: quartz.lock.json changed (or first build) — fresh plugin install"
  rm -rf .quartz/plugins
fi

# --clean skips plugins whose directory already exists (cache hit) and clones any
# that are missing (cache miss / after a wipe).
npx quartz plugin install --clean

mkdir -p .quartz/plugins
printf %s "$HASH" > "$MARKER"

npx quartz build
