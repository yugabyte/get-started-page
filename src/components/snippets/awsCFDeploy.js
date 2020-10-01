export const cloudFormationCode = (version) => `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body file://yugabyte_cloudformation.yaml --parameters ParameterKey=DBVersion,ParameterValue=${version},ParameterKey=KeyName,ParameterValue=<ssh-key-name>
`

export const eksInstallYBCode = (version) => `helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install --version=${version} yb-demo yugabytedb/yugabyte --set resource.master.requests.cpu=0.5,resource.master.requests.memory=0.5Gi,resource.tserver.requests.cpu=0.5,resource.tserver.requests.memory=0.5Gi,replicas.master=1,replicas.tserver=1 --namespace yb-demo`
