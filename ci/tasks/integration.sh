#!/usr/bin/env bash

set -e -x

pushd dew-web
  npm install
  PORT=3000 npm start || true &

  npm test
pop
