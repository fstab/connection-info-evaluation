#!/bin/bash

set -e

cd $(dirname $0)/..

echo
echo "############################################################"
echo "# Un-Deploying the OpenTelemetry Collector"
echo "############################################################"
echo

kubectl delete -f ./deploy/collector.yaml
kubectl -n monitoring delete configmap collector-config
