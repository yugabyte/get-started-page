export const resourceManagerCode = `
ssh-keygen -f yugabyte-key
git clone https://github.com/yugabyte/azure-resource-manager.git
cd azure-resource-manager
az group create --name yb-demo -l <region>
az group deployment create --resource-group yb-demo --template-file yugabyte_deployment.json --parameters ClusterName='yb-demo' SshUser='centos' YBVersion='2.3.2.0' SshKeypair='<contents of yugabyte-key.pub>'
`

export const aksServerCode = `
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
`
