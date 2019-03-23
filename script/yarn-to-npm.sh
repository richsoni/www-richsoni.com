#! /usr/bin/env bash
cat package.json | jq 'del(.workspaces)' | jq '.scripts.cleaninstall="npm run clean && npm run install"' | jq ''  > tmp_jq.json
mv tmp_jq.json package.json

cat lerna.json | jq '.npmClient="npm"' | jq "del(.useWorkspaces)" | jq '.command.bootstrap={"npmClientArgs": ["--no-package-lock"], "hoist": true, "ignoreScripts": true}' > tmp_jq.json
mv tmp_jq.json lerna.json
