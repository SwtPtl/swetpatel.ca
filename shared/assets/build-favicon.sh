#!/usr/bin/env bash
# Requires: imagemagick (convert)
# Usage: bash shared/assets/build-favicon.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INPUT="$SCRIPT_DIR/favicon.svg"
OUTPUT_ICO="$SCRIPT_DIR/favicon.ico"
OUTPUT_PNG="$SCRIPT_DIR/favicon-32.png"

echo "Converting favicon.svg → favicon.ico..."
convert -background none -size 32x32 "$INPUT" "$OUTPUT_PNG"
convert "$OUTPUT_PNG" "$OUTPUT_ICO"
cp "$OUTPUT_ICO" "$SCRIPT_DIR/../../react/public/favicon.ico"
cp "$INPUT" "$SCRIPT_DIR/../../react/public/favicon.svg"

echo "Done. favicon.ico written to shared/assets/ and react/public/"
