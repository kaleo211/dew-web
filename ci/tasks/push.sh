#!/usr/bin/env bash

set -e -x

pushd dew-web
  cf api $CF_ENDPOINT
  cf auth $CF_USERNAME $CF_PASSWORD
  cf push
popd