const code = `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body yugabyte_cloudformation.yaml --parameters DBVersion=1.3.2.1, KeyName=<ssh-key-name>
`

export default code
