#!/usr/bin/env bash
# Smoke test for Le Malentendu PoC: schema, atomgraph, validate, compile.
# Run from repo root. Exits non-zero on the first failure.
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

pip install -q -r poc/requirements.txt 2>/dev/null

echo "=== schema --check ==="
python3 poc/schema.py --check

echo ""
echo "=== atomgraph --check ==="
python3 poc/atomgraph.py --check

echo ""
echo "=== validate atoms + crossings ==="
(cd poc && python3 validate.py atoms crossings)

echo ""
echo "=== compile --check ==="
python3 poc/compile.py --check

echo ""
echo "=== atomgraph render (draft mode) ==="
(cd poc && python3 atomgraph.py atoms crossings | head -20)

echo ""
echo "=== atomgraph render (strict mode) ==="
(cd poc && python3 atomgraph.py atoms crossings --strict | head -20)

echo ""
echo "All smoke tests passed."
