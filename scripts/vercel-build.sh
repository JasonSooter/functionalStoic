#!/bin/sh
# Vercel build with lockfile-keyed plugin caching + a resilient plugin install.
#
# Vercel restores its build cache (including .quartz/plugins) between builds.
# Reusing those cached plugins is fast, but they go stale when a plugin's pinned
# commit changes — which is exactly when quartz.lock.json changes. So: reuse the
# cache while the lockfile hash is unchanged; wipe + reinstall fresh when it moves.
#
# A fresh install clones ~47 plugin repos from GitHub. At the default concurrency
# (CPU cores — high on Vercel) that burst gets throttled/rate-limited by GitHub,
# leaving many "failed to restore"; the build then dies on a missing plugin
# export (e.g. CustomOgImagesEmitterName). So we clone with reduced concurrency
# and retry-with-backoff until every lockfile plugin is present (--clean is
# idempotent — each retry only re-clones the ones still missing).
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

# How many plugins the lockfile expects (0 if unreadable → completeness gate off).
EXPECTED=$(node -e "try{process.stdout.write(String(Object.keys(require('./quartz.lock.json').plugins||{}).length))}catch(e){process.stdout.write('0')}" 2>/dev/null || echo 0)

# Install with reduced concurrency + retry-with-backoff. Break when every plugin
# is present, or when a retry makes no further progress (converged / genuinely
# stuck), or after a hard attempt cap.
PREV=-1
ATTEMPT=0
while [ "$ATTEMPT" -lt 5 ]; do
  ATTEMPT=$((ATTEMPT + 1))
  npx quartz plugin install --clean --concurrency 3 || true
  INSTALLED=$(find .quartz/plugins -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
  echo "vercel-build: $INSTALLED/$EXPECTED plugins present (attempt $ATTEMPT)"
  if { [ "$EXPECTED" -gt 0 ] && [ "$INSTALLED" -ge "$EXPECTED" ]; } || [ "$INSTALLED" -le "$PREV" ]; then
    break
  fi
  PREV=$INSTALLED
  echo "vercel-build: some plugins missing — retrying after backoff"
  sleep $((ATTEMPT * 12))
done

# Persist the marker only when we have a real hash; otherwise clear any stale one
# so the next build never treats an empty hash as a cache hit.
mkdir -p .quartz/plugins
if [ -n "$HASH" ]; then
  printf %s "$HASH" > "$MARKER"
else
  rm -f "$MARKER"
fi

npx quartz build
