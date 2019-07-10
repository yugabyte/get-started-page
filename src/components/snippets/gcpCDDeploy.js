const code = `
gcloud container clusters create yugabyte
kubectl create -f https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset.yaml
kubectl exec -it yb-tserver-0 bin/cqlsh
`

export default code
