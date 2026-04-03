#!/bin/bash

set -e

cd $(dirname $0)/..

echo
echo "############################################################"
echo "# Deploying Grafana"
echo "############################################################"
echo

kubectl -n monitoring create configmap grafana-provisioning --from-file=./deploy/grafana-datasources.yaml
kubectl apply -f ./deploy/grafana.yaml
