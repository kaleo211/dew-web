#!/usr/bin/env bash

set -e -x

pushd dew-web
  npm install --only=dev
  PORT=3000 npm start
  npm test
pop
