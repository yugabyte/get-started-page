export const yamlDbServerCode = `
minikube start --memory=8192 --cpus=4 --disk-size=40g --vm-driver=virtualbox
wget https://raw.githubusercontent.com/yugabyte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml
kubectl apply -f yugabyte-statefulset-rf-1.yaml
`

export const helmDbServerCode = `
minikube start --memory=8192 --cpus=4 --disk-size=40g --vm-driver=virtualbox
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install yb-demo yugabytedb/yugabyte \
--set resource.master.requests.cpu=0.5,resource.master.requests.memory=0.5Gi,\
resource.tserver.requests.cpu=0.5,resource.tserver.requests.memory=0.5Gi,\
replicas.master=1,replicas.tserver=1 --namespace yb-demo
`

export const k8sOpServerCode = `
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_crd.yaml
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/operator.yaml
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_cr.yaml
kubectl get po,sts,svc
`

export const opHubServerCode = `
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/0.13.0/install.sh | bash -s 0.13.0
kubectl create -f https://operatorhub.io/install/yugabyte-operator.yaml
kubectl create namespace yb-operator && kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_cr.yaml
`

export const sqlShellCode = `
# Make sure you have deployed the cluster using instructions above
kubectl exec -n yb-demo -it yb-tserver-0 /home/yugabyte/bin/ysqlsh -- -h yb-tserver-0.yb-tservers.yb-demo
`

export const ysqlCode = `
wget https://raw.githubusercontent.com/yugabyte/yb-sql-workshop/master/query-using-bi-tools/schema.sql
wget https://github.com/yugabyte/yb-sql-workshop/raw/master/query-using-bi-tools/sample-data.tgz
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
\\c yb_demo;
`

export const ybDemoCommands = `
\\i share/schema.sql
\\i share/products.sql
\\i share/users.sql
\\i share/orders.sql
\\i share/reviews.sql
`
