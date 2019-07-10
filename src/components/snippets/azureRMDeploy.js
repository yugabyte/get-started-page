const code = `
az group create --name yb-eastus-resource
az aks create --resource-group yb-eastus-resource --name yb-aks-cluster --node-count 3 --generate-ssh-keys
az aks get-credentials --resource-group yb-eastus-resource --name yb-aks-cluster
kubectl create -f https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset.yaml
`

export default code
