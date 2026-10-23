#!/bin/sh
# Vercel install that keeps our build caches across `npm ci`.
#
# With no framework preset, Vercel's build cache only holds node_modules/**, so
# vercel-build.sh parks its caches in node_modules/.cache/ (Quartz plugins, OG
# images, OG fonts). `npm ci` deletes node_modules before installing, so set
# that directory aside first and put it back afterwards.
set -e

CACHE=node_modules/.cache
HOLD=$(mktemp -d)

if [ -d "$CACHE" ]; then
  mv "$CACHE" "$HOLD/cache"
fi

npm ci

if [ -d "$HOLD/cache" ]; then
  rm -rf "$CACHE"
  mv "$HOLD/cache" "$CACHE"
fi
rmdir "$HOLD" 2>/dev/null || true
