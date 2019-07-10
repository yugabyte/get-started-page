export const generateConfig = (
  provider, // List of providers here: https://www.terraform.io/docs/providers/index.html
  accessKey = 'ACCESS_KEY_HERE',
  secretKey = 'SECRET_KEY_HERE',
  sshKeyPair = 'SSH_KEYPAIR_HERE',
  sshKeyPath = 'SSH_KEY_PATH_HERE',
  securityGroupId = 'SECURITY_GROUP_HERE',
  vpcId = 'VPC_ID_HERE',
  subnetIds = '"SUBNET_ID_HERE"'
) => {
  const subnetIdStr = subnetIds.split(',').map(x => {
    let trimmed = x.trim()
    if (trimmed.charAt(0) !== '"' || trimmed.charAt(trimmed.length - 1) !== '"') {
      return `"${trimmed}"`
    }
    return trimmed
  }).join(',')
  return `provider "${provider}" {
  # Configure your AWS account credentials here.
  access_key = "${accessKey}"
  secret_key = "${secretKey}"
  region     = "us-west-2"
}

module "yugabyte-db-cluster" {
  # The source module used for creating AWS clusters.
  source = "github.com/YugaByte/terraform-aws-yugabyte"

  # The name of the cluster to be created, change as per need.
  cluster_name = "test-cluster"

  # Existing custom security group to be passed so that we can connect to the instances.
  # Make sure this security group allows your local machine to SSH into these instances.
  custom_security_group_id="${securityGroupId}"

  # AWS key pair that you want to use to ssh into the instances.
  # Make sure this key pair is already present in the noted region of your account.
  ssh_keypair = "${sshKeyPair}"
  ssh_key_path = "${sshKeyPath}"

  # Existing vpc and subnet ids where the instances should be spawned.
  vpc_id = "${vpcId}"
  subnet_ids = [${subnetIdStr}]

  # Replication factor of the YugaByte DB cluster.
  replication_factor = "3"

  # The number of nodes in the cluster, this cannot be lower than the replication factor.
  num_instances = "3"
}`
}

const code = `
terraform init
terraform apply
`

export default code
