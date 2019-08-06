export const yaml = `
wget https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml
kubectl apply -f yugabyte-statefulset-rf-1.yaml
`

export const helm = `
kubectl create -f https://raw.githubusercontent.com/YugaByte/charts/master/stable/yugabyte/yugabyte-rbac.yaml
helm init --service-account yugabyte-helm --upgrade --wait
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
helm install yugabytedb/yugabyte --wait --namespace yb-demo --name yb-demo --set "disableYsql=false"
`
