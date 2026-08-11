#!/bin/bash

set -e

echo "Starting deployment..."

cd ~/devops-project

git pull origin main

docker stop aws-devops-container || true
docker rm aws-devops-container || true

docker build -t aws-devops-app .

docker run -d \
  --name aws-devops-container \
  -p 3000:3000 \
  --restart unless-stopped \
  aws-devops-app

echo "Deployment completed successfully!"
