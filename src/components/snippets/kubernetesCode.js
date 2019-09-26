export const yamlDbServerCode = `
wget https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml
kubectl apply -f yugabyte-statefulset-rf-1.yaml
`

export const helmDbServerCode = `
kubectl create -f https://raw.githubusercontent.com/YugaByte/charts/master/stable/yugabyte/yugabyte-rbac.yaml
helm init --service-account yugabyte-helm --upgrade --wait
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
helm install yugabytedb/yugabyte --wait --namespace yb-demo --name yb-demo --set "disableYsql=false"
`

export const sqlShellCode = `
# Make sure you have deployed the cluster using instructions above
kubectl exec -n yb-demo -it yb-tserver-0 /home/yugabyte/bin/ysqlsh -- -h yb-tserver-0.yb-tservers.yb-demo
`

export const ysqlCode = `
wget https://raw.githubusercontent.com/YugaByte/yb-sql-workshop/master/query-using-bi-tools/schema.sql
wget https://github.com/YugaByte/yb-sql-workshop/raw/master/query-using-bi-tools/sample-data.tgz
tar zxvf sample-data.tgz
kubectl cp ./schema.sql yb-tserver-n1:/home/yugabyte/.
kubectl exec -it yb-tserver-n1 bash && mkdir data
kubectl cp ./data/orders.sql yb-tserver-n1:/home/yugabyte/data/.
kubectl cp ./data/products.sql yb-tserver-n1:/home/yugabyte/data/.
kubectl cp ./data/reviews.sql yb-tserver-n1:/home/yugabyte/data/.
kubectl cp ./data/users.sql yb-tserver-n1:/home/yugabyte/data/.
kubectl exec -it yb-tserver-0 /home/yugabyte/bin/ysqlsh -- -h yb-tserver-0  --echo-queries
`

export const pgCommands = `
CREATE DATABASE yb_demo;
GRANT ALL ON DATABASE yb_demo to yugabyte;
\\c yb_demo;
`

export const ybDemoCommands = `
\\i 'schema.sql';
\\i 'data/products.sql'
\\i 'data/users.sql'
\\i 'data/orders.sql'
\\i 'data/reviews.sql'
`
