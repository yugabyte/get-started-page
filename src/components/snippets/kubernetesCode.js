export const yamlDbServerCode = (version) => {
  if (version !== 'latest') {
    return `minikube start --memory=8192 --cpus=4 --disk-size=40g --vm-driver=virtualbox
kubectl create namespace yb-demo
curl  https://raw.githubusercontent.com/yugabyte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml | sed 's/image: yugabytedb\\/yugabyte\\:latest/image: yugabytedb\\/yugabyte:${version}/g' | kubectl  apply --namespace='yb-demo' -f -`;
  } else {
    return `minikube start --memory=8192 --cpus=4 --disk-size=40g --vm-driver=virtualbox
kubectl create namespace yb-demo
curl  https://raw.githubusercontent.com/yugabyte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml | kubectl apply --namespace='yb-demo' -f -`;
  }
};

export const helmDbServerCode = (version) => `
minikube start --memory=8192 --cpus=4 --disk-size=40g --vm-driver=virtualbox
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install yb-demo yugabytedb/yugabyte \
--set resource.master.requests.cpu=0.5,resource.master.requests.memory=0.5Gi,\
resource.tserver.requests.cpu=0.5,resource.tserver.requests.memory=0.5Gi,\
replicas.master=1,replicas.tserver=1,Image.tag=${version} --namespace yb-demo
`;

export const sqlShellCode = `
# Make sure you have deployed the cluster using instructions above
kubectl exec -n yb-demo -it yb-tserver-0 -- sh -c "cd /home/yugabyte && ysqlsh -h yb-tserver-0.yb-tservers.yb-demo"
`;

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
`;

export const pgCommands = `
CREATE DATABASE yb_demo;
\\c yb_demo;
`;

export const ybDemoCommands = `
\\i share/schema.sql
\\i share/products.sql
\\i share/users.sql
\\i share/orders.sql
\\i share/reviews.sql
`;
