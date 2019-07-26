export const yaml = `
mkdir ~/yugabyte && cd ~/yugabyte
wget https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml
`

export const helm = `
kubectl create -f https://raw.githubusercontent.com/YugaByte/charts/master/stable/yugabyte/yugabyte-rbac.yaml
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
helm install yugabytedb/yugabyte --namespace yb-demo --name yb-demo --wait
`
