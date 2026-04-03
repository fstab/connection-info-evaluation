#!/bin/bash

set -e

cd $(dirname $0)/..

./scripts/deploy-monitoring-01-namespace.sh
./scripts/deploy-monitoring-02-prometheus.sh
./scripts/deploy-monitoring-03-tempo.sh
./scripts/deploy-monitoring-04-grafana.sh
./scripts/deploy-monitoring-05-collector.sh
