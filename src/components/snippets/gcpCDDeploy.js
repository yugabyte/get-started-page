export const deploymentManagerCode = `
git clone https://github.com/yugabyte/gcp-deployment-manager.git
cd gcp-deployment-manager
gcloud deployment-manager deployments create <your-deployment-name> --config=yugabyte-deployment.yaml
`

export const gkeClusterCode = `
gcloud container clusters create yugabyte --machine-type=n1-standard-8
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install yb-demo yugabytedb/yugabyte --namespace yb-demo --wait
`
