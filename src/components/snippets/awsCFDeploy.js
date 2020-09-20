export const cloudFormationCode = (version) => `
wget https://raw.githubusercontent.com/yugabyte/aws-cloudformation/master/yugabyte_cloudformation.yaml
aws cloudformation create-stack --stack-name <stack-name> --template-body file://yugabyte_cloudformation.yaml --parameters ParameterKey=DBVersion,ParameterValue=${version},ParameterKey=KeyName,ParameterValue=<ssh-key-name>
`

export const createEKSClusterCmd = `eksctl create cluster \
--name yb-multizone \
--version 1.14 \
--region us-east-1 \
--zones us-east-1a,us-east-1b,us-east-1c \
--nodegroup-name standard-workers \
--node-type m5.2xlarge \
--nodes 3 \
--nodes-min 1 \
--nodes-max 4 \
--managed`

export const eksStorageFile = `kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-east-1a
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: us-east-1a
---
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-east-1b
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: us-east-1b
---
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-east-1c
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: us-east-1c`

export const eksOverridesFile = `isMultiAz: True

AZ: us-east-1a

masterAddresses: "yb-master-0.yb-masters.yb-demo-us-east-1a.svc.cluster.local:7100, yb-master-0.yb-masters.yb-demo-us-east-1b.svc.cluster.local:7100, yb-master-0.yb-masters.yb-demo-us-east-1c.svc.cluster.local:7100"

storage:
  master:
    storageClass: "standard-us-east-1a"
  tserver:
    storageClass: "standard-us-east-1a"

replicas:
  master: 1
  tserver: 1
  totalMasters: 3

gflags:
  master:
    placement_cloud: "aws"
    placement_region: "us-east-1"
    placement_zone: "us-east-1a"
  tserver:
    placement_cloud: "aws"
    placement_region: "us-east-1"
    placement_zone: "us-east-1a"
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
kubectl apply -f <storage class>.yaml
helm repo add yugabytedb https://charts.yugabyte.com
kubectl create namespace yb-demo-us-east-1a
kubectl create namespace yb-demo-us-east-1b
kubectl create namespace yb-demo-us-east-1c
helm install yb-demo-us-east-1a yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1a \
 -f <overrides zone>-us-east-1a.yaml --wait
 helm install yb-demo-us-east-1b yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1b \
 -f <overrides zone>-us-east-1b.yaml --wait
 helm install yb-demo-us-east-1c yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1c \
 -f <overrides zone>-us-east-1c.yaml --wait
`

export const eksInstallYBCode = `helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo-us-east-1a
kubectl create namespace yb-demo-us-east-1b
kubectl create namespace yb-demo-us-east-1c
helm install yb-demo-us-east-1a yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1a \
 -f overrides-us-east-1a.yaml --wait
helm install yb-demo-us-east-1b yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1b \
 -f overrides-us-east-1b.yaml --wait
helm install yb-demo-us-east-1c yugabytedb/yugabyte \
 --namespace yb-demo-us-east-1c \
 -f overrides-us-east-1c.yaml --wait`
