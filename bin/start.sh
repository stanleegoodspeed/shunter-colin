#!/usr/bin/env bash

pm2 start node_modules/shunter/bin/serve.js -- -p 5000
pm2 start app.js -- -p 5400 -r=$1
pm2 logs