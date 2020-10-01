export const k8sOpServerCode = `
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_crd.yaml
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/operator.yaml
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_cr.yaml
kubectl get po,sts,svc
`

export const opHubServerCode = `
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/0.13.0/install.sh | bash -s 0.13.0
kubectl create -f https://operatorhub.io/install/yugabyte-operator.yaml
kubectl create namespace yb-operator && kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_cr.yaml
`
