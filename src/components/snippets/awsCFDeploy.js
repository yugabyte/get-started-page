export const cloudFormationCode = (version) => `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body file://yugabyte_cloudformation.yaml --parameters ParameterKey=DBVersion,ParameterValue=${version},ParameterKey=KeyName,ParameterValue=<ssh-key-name>
`

export const eksServerCode = `
eksctl create cluster \
--name yb-multizone \
--version 1.14 \
--region us-east-1 \
--zones us-east-1a,us-east-1b,us-east-1c \
--nodegroup-name standard-workers \
--node-type m5.2xlarge \
--nodes 3 \
--nodes-min 1 \
--nodes-max 4 \
--managed
`
