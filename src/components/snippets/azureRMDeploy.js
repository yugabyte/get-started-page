export const resourceManagerCode = (version) => `
ssh-keygen -f yugabyte-key
git clone https://github.com/yugabyte/azure-resource-manager.git
cd azure-resource-manager
az group create --name yb-demo -l <region>
az group deployment create --resource-group yb-demo --template-file yugabyte_deployment.json --parameters ClusterName='yb-demo' SshUser='centos' YBVersion='${version}' SshKeypair='<contents of yugabyte-key.pub>'
`;

export const aksServerCode = (version) => `
az login
az group create --name yugabytedbRG --location westus
az aks create \
--resource-group yugabytedbRG \
--name yugabytedbAKSCluster \
--node-count 3 \
--node-vm-size Standard_D4_v3 \
--enable-addons monitoring \
--generate-ssh-keys
az aks get-credentials --resource-group yugabytedbRG --name yugabytedbAKSCluster
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install yb-demo -n yb-demo yugabytedb/yugabyte \
--set storage.master.count=1 \
--set storage.tserver.count=1 \
--set storage.master.storageClass=default \
--set storage.tserver.storageClass=default \
--set resource.master.requests.cpu=1 \
--set resource.master.requests.memory=1Gi \
--set resource.tserver.requests.cpu=1 \
--set resource.tserver.requests.memory=1Gi \
--set resource.master.limits.cpu=1 \
--set resource.master.limits.memory=1Gi \
--set resource.tserver.limits.cpu=1 \
--set resource.tserver.limits.memory=1Gi \
--set Image.tag=${version} \
--timeout=15m
`;
