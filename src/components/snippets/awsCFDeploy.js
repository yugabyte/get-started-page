export const cloudFormationCode = (version) => `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body file://yugabyte_cloudformation.yaml --parameters ParameterKey=DBVersion,ParameterValue=${version},ParameterKey=KeyName,ParameterValue=<ssh-key-name>
`

export const eksInstallYBCode = (version) => `helm repo add yugabytedb https://charts.yugabyte.com
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
`
