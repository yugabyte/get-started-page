const code = `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body file://yugabyte_cloudformation.yaml --parameters ParameterKey=DBVersion,ParameterValue=2.1.3.0,ParameterKey=KeyName,ParameterValue=<ssh-key-name>
`

export default code
