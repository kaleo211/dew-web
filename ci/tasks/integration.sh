#!/usr/bin/env bash

set -e -x

pushd dew-web
  npm install
  npm test
popd
