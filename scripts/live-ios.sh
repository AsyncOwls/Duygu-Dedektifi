#!/usr/bin/env bash
# Live-reload development loop for the native iOS build.
#
# Starts the Vite dev server and points the app at it instead of the bundled
# copy, so saving a file under src/ refreshes the app immediately — no build,
# no `cap sync`.
#
#   scripts/live-ios.sh              # simulator (default)
#   scripts/live-ios.sh --device     # a physical device on the same Wi-Fi
#
# `cap run --live-reload` only sets the URL; it does not start a dev server,
# so this script owns both halves and tears the server down on exit.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PORT=5173

if [ "${1:-}" = "--device" ]; then
  # A device cannot reach localhost, so the app is pointed at this Mac's LAN
  # address. iOS App Transport Security blocks plain http to a LAN host: if the
  # app comes up blank, that is why — the simulator path avoids it (ATS
  # exempts localhost).
  HOST="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)"
  if [ -z "$HOST" ]; then
    echo "error: could not determine this Mac's LAN address (en0/en1)." >&2
    exit 1
  fi
  echo "==> Device mode — the app will load from http://$HOST:$PORT"
else
  HOST="localhost"
  echo "==> Simulator mode — the app will load from http://$HOST:$PORT"
fi

npm run dev -- --port "$PORT" --strictPort &
DEV_PID=$!
trap 'kill "$DEV_PID" 2>/dev/null || true' EXIT INT TERM

# Give Vite a moment to bind before the app tries to load the URL.
for _ in $(seq 1 40); do
  if curl -sf -o /dev/null "http://localhost:$PORT/"; then break; fi
  sleep 0.25
done

npx cap run ios --live-reload --host "$HOST" --port "$PORT"
