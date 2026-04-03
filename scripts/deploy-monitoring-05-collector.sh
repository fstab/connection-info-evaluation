#!/bin/bash

set -e

cd $(dirname $0)/..

echo
echo "############################################################"
echo "# Deploying the OpenTelemetry Collector"
echo "############################################################"
echo

kubectl -n monitoring create configmap collector-config --from-file=./deploy/collector-config.yaml
kubectl apply -f ./deploy/collector.yaml
