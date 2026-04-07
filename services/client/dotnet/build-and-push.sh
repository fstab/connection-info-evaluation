#!/bin/bash

set -e

cd $(dirname $0)

IMAGE_NAME=connection-info-evaluation_client_dotnet

echo -n "Testing Docker Login... "

if ! podman login --get-login docker.io ; then
	echo "Not logged in to Docker Hub. Please run the following command:" >&2
	echo "podman login docker.io" >&2
	exit 1
else
	echo ok.
fi

echo "Building Docker image"
podman build -t $IMAGE_NAME .

echo "Pushing Docker image"
podman tag $IMAGE_NAME docker.io/fstab/$IMAGE_NAME
podman push docker.io/fstab/$IMAGE_NAME
