#!/bin/bash

set -e

cd $(dirname $0)/..

echo
echo "############################################################"
echo "# Un-Deploying Grafana"
echo "############################################################"
echo

kubectl delete -f ./deploy/grafana.yaml
kubectl -n monitoring delete configmap grafana-provisioning
