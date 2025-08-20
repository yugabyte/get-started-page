// List of providers here: https://www.terraform.io/docs/providers/index.html
export const generateAwsConfig = (
  version = 'YB_VERSION_HERE',
  accessKey = 'ACCESS_KEY_HERE',
  secretKey = 'SECRET_KEY_HERE',
  sshKeyPair = 'SSH_KEYPAIR_HERE',
  sshKeyPath = 'SSH_KEY_PATH_HERE',
  securityGroupId = 'SECURITY_GROUP_HERE',
  vpcId = 'VPC_ID_HERE',
  subnetIds = '"SUBNET_ID_HERE"',
) => {
  const subnetIdStr = subnetIds
    .split(',')
    .map((x) => {
      let trimmed = x.trim();
      if (
        trimmed.charAt(0) !== '"' ||
        trimmed.charAt(trimmed.length - 1) !== '"'
      ) {
        return `"${trimmed}"`;
      }
      return trimmed;
    })
    .join(',');
  return `provider "aws" {
  # Configure your AWS account credentials here.
  access_key = "${accessKey}"
  secret_key = "${secretKey}"
  region     = "us-west-2"
}

module "yugabyte-db-cluster" {
  # The source module used for creating AWS clusters.
  source = "github.com/yugabyte/terraform-aws-yugabyte"

  # The name of the cluster to be created, change as per need.
  cluster_name = "test-cluster"

  # Version of yugabyte
  yb_version = "${version}"

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

  # Replication factor of the YugabyteDB cluster.
  replication_factor = "3"

  # The number of nodes in the cluster, this cannot be lower than the replication factor.
  num_instances = "3"
}`;
};

export const generateAzureConfig = (
  subId = 'AZURE_SUBSCRIPTION_ID',
  clientId = 'AZURE_CLIENT_ID',
  clientSecret = 'AZURE_CLIENT_SECRET',
  tenantId = 'AZURE_TENANT_ID',
  sshPublic = 'SSH_PUBLIC_KEY_HERE',
  sshPrivate = 'SSH_PRIVATE_KEY_HERE',
  sshUser = 'SSH_USER_NAME_HERE',
  vpcRegion = 'YOUR_VPC_REGION',
) => {
  return `provider "azurerm" {
    # Provide your Azure Creadentilals 
    subscription_id = "${subId}"
    client_id       = "${clientId}"
    client_secret   = "${clientSecret}"
    tenant_id       = "${tenantId}"
  }

  module "yugabyte-db-cluster" {
    source = "github.com/yugabyte/terraform-azure-yugabyte.git"
    
    # The name of the cluster to be created.
    cluster_name = "test-yugabyte"
    
    # key pair.
    ssh_private_key = "${sshPrivate}"
    ssh_public_key = "${sshPublic}"
    ssh_user = "${sshUser}"
    
    # The region name where the nodes should be spawned.
    region_name = "${vpcRegion}"
    
    # The name of resource  group in which all Azure resource will be created. 
    resource_group = "test-yugabyte"
    
    # Replication factor.
    replication_factor = "3"
    
    # The number of nodes in the cluster, this cannot be lower than the replication factor.
    node_count = "3"
  }`;
};

export const generateGCPConfig = (
  credentialFile = 'FILE_NAME',
  sshPublic = 'SSH_PUBLIC_KEY_HERE',
  sshPrivate = 'SSH_PRIVATE_KEY_HERE',
  sshUser = 'SSH_USER_NAME_HERE',
  vpcRegion = 'YOUR_VPC_REGION',
) => {
  return `provider "google" {
    # Provide your GCP Creadentilals 
    credentials = "\${file("${credentialFile}")}"

    # The name of your GCP project 
    project = "yugabyte-pcf"
  }

  module "yugabyte-db-cluster" {
    source = "github.com/yugabyte/terraform-gcp-yugabyte.git"
    
    # The name of the cluster to be created.
    cluster_name = "test-yugabyte"
    
    # key pair.
    ssh_private_key = "${sshPrivate}"
    ssh_public_key = "${sshPublic}"
    ssh_user = "${sshUser}"
    
    # The region name where the nodes should be spawned.
    region_name = "${vpcRegion}"
    
    # Replication factor.
    replication_factor = "3"
    
    # The number of nodes in the cluster, this cannot be lower than the replication factor.
    node_count = "3"
  }`;
};

export const generateEKSCreateNode = (
  regionInput = 'AWS_REGION_HERE',
  zoneListInput = 'ZONE_1A,ZONE_1B,ZONE_1C',
  nodeGroup = 'AWS_NODE_GROUP_HERE',
  machineType = 'YOUR_MACHINE_TYPE',
) => {
  return `
    eksctl create cluster \
--name yb-multizone \
--version 1.17 \
--region ${regionInput} \
--zones ${zoneListInput} \
--nodegroup-name ${nodeGroup} \
--node-type ${machineType} \
--nodes 3 \
--nodes-min 1 \
--nodes-max 4 \
--managed
  `;
};

export const generateEKSStorageYaml = (
  nodePrefix = 'standard',
  regionInput = 'us-east-1a,us-east-1b,us-east-1c',
  storageType = 'gp2',
) => {
  return regionInput
    .split(',')
    .map(
      (zone) => `
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: ${nodePrefix}-${zone}
provisioner: kubernetes.io/aws-ebs
parameters:
  type: ${storageType}
  zone: ${zone}
`,
    )
    .join('\n---\n');
};

const code = `
terraform init
terraform apply
`;

export default code;
