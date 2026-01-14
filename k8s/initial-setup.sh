#!/bin/bash
# Initial setup script for CLERINT Website on Kubernetes
# Run this ONCE to set up the namespace, secrets, and initial deployment

set -e

echo "=== CLERINT Website - Initial Kubernetes Setup ==="

# Variables - UPDATE THESE
GITHUB_USERNAME="CLERINT"  # Your GitHub username or org
GITHUB_TOKEN=""            # GitHub Personal Access Token with read:packages scope

# Check if token is provided
if [ -z "$GITHUB_TOKEN" ]; then
    echo "ERROR: Please set GITHUB_TOKEN in this script or pass it as an argument"
    echo "Usage: GITHUB_TOKEN=ghp_xxx ./initial-setup.sh"
    exit 1
fi

echo ""
echo "Step 1: Creating namespace..."
kubectl apply -f namespace.yaml

echo ""
echo "Step 2: Creating GHCR pull secret..."
kubectl create secret docker-registry ghcr-secret \
    --docker-server=ghcr.io \
    --docker-username=$GITHUB_USERNAME \
    --docker-password=$GITHUB_TOKEN \
    --namespace=clerint \
    --dry-run=client -o yaml | kubectl apply -f -

echo ""
echo "Step 3: Creating application secrets..."
kubectl apply -f secret.yaml

echo ""
echo "Step 4: Creating deployment..."
kubectl apply -f deployment.yaml

echo ""
echo "Step 5: Creating service..."
kubectl apply -f service.yaml

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Website is now accessible on NodePort 30500"
echo "Configure nginx to proxy to: http://127.0.0.1:30500"
echo ""
echo "To check status:"
echo "  kubectl get pods -n clerint"
echo "  kubectl get svc -n clerint"
echo ""
echo "To view logs:"
echo "  kubectl logs -n clerint -l app=clerint-website -f"
