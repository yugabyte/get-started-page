const code = `
ssh-keygen -f yugabyte-key
git clone https://github.com/YugaByte/azure-resource-manager.git
cd azure-resource-manager
az group create --name yb-demo -l <region>
az group deployment create --resource-group yb-demo --template-file yugabyte_deployment.json --parameters ClusterName='yb-demo' SshUser='centos' YBVersion='2.0.9.0' SshKeypair='<contents of yugabyte-key.pub>'
`

export default code
