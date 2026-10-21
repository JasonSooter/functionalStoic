#!/bin/sh
# Vercel install that keeps the Quartz plugin cache across `npm ci`.
#
# With no framework preset, Vercel's build cache only holds node_modules/**, so
# vercel-build.sh parks .quartz/plugins in node_modules/.cache/ after each build.
# `npm ci` deletes node_modules before installing, so set that directory aside
# first and put it back afterwards.
set -e

CACHE=node_modules/.cache/quartz-plugins
HOLD=$(mktemp -d)

if [ -d "$CACHE" ]; then
  mv "$CACHE" "$HOLD/plugins"
fi

npm ci

if [ -d "$HOLD/plugins" ]; then
  mkdir -p "$(dirname "$CACHE")"
  mv "$HOLD/plugins" "$CACHE"
fi
rmdir "$HOLD" 2>/dev/null || true
