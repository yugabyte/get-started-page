export const deploymentManagerCode = `
git clone https://github.com/yugabyte/gcp-deployment-manager.git
cd gcp-deployment-manager
gcloud deployment-manager deployments create <your-deployment-name> --config=yugabyte-deployment.yaml
`

export const gkeClusterCode = `
gcloud container clusters create yugabyte --machine-type=n1-standard-8
helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo
helm install yb-demo yugabytedb/yugabyte --namespace yb-demo --wait
`

export const createGKEClusterLines = `gcloud container clusters create my-regional-cluster \
--machine-type=n1-standard-8 \
--num-nodes 1 \
--region us-central1 \
--node-locations us-central1-a,us-central1-b,us-central1-c`

export const gkeStorageFile = `kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-central1-a
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-standard
  replication-type: none
  zone: us-central1-a
---
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-central1-b
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-standard
  replication-type: none
  zone: us-central1-b
---
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard-us-central1-c
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-standard
  replication-type: none
  zone: us-central1-c`

export const gkeOverridesFile = `isMultiAz: True

AZ: us-central1-a

masterAddresses: "yb-master-0.yb-masters.yb-demo-us-central1-a.svc.cluster.local:7100, yb-master-0.yb-masters.yb-demo-us-central1-b.svc.cluster.local:7100, yb-master-0.yb-masters.yb-demo-us-central1-c.svc.cluster.local:7100"

storage:
  master:
    storageClass: "standard-us-central1-a"
  tserver:
    storageClass: "standard-us-central1-a"

replicas:
  master: 1
  tserver: 1
  totalMasters: 3

gflags:
  master:
    placement_cloud: "gke"
    placement_region: "us-central1"
    placement_zone: "us-central1-a"
  tserver:
    placement_cloud: "gke"
    placement_region: "us-central1"
    placement_zone: "us-central1-a"
`

export const gkeInstallYBCode = `helm repo add yugabytedb https://charts.yugabyte.com
helm repo update
kubectl create namespace yb-demo-us-central1-a
kubectl create namespace yb-demo-us-central1-b
kubectl create namespace yb-demo-us-central1-c
helm install yb-demo-us-central1-a yugabytedb/yugabyte \
 --namespace yb-demo-us-central1-a \
 -f overrides-us-central1-a.yaml --wait
 helm install yb-demo-us-central1-b yugabytedb/yugabyte \
 --namespace yb-demo-us-central1-b \
 -f overrides-us-central1-b.yaml --wait
 helm install yb-demo-us-central1-c yugabytedb/yugabyte \
 --namespace yb-demo-us-central1-c \
 -f overrides-us-central1-c.yaml --wait`
