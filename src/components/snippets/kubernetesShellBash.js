const code = `
# Make sure you have deployed the cluster using instructions above
kubectl exec -it yb-tserver-0 /home/yugabyte/bin/ysqlsh -- -h yb-tserver-0
`

export default code
