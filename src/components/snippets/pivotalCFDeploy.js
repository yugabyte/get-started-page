export const cloudFoundryCode = `cf create-service yugabyte-db x-small yb-demo -c '{"universe_name": "yb-demo"}'`

export const containerServiceCode = `pks create-clusters pks-yugabyte-cluster-1 --external-hostname=35.227.112.223 --plan medium
pks list-clusters
kubectl apply -f yugaware-k8s.yml`
