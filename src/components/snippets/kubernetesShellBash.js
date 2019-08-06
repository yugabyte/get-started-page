const code = `
# Make sure you have deployed the cluster using instructions above
kubectl exec -n yb-demo -it yb-tserver-0 /home/yugabyte/bin/ysqlsh -- -h yb-tserver-0.yb-tservers.yb-demo
`

export default code
