export const k8sOpServerCode = (versionTag) => `
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_crd.yaml
kubectl create -f https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/operator.yaml
curl  https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_full_cr.yaml | sed 's/tag: 2.1.2.0-b10/tag: ${versionTag}/g' | kubectl  create -f -
kubectl get po,sts,svc
`

export const opHubServerCode = (versionTag) => `
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/0.13.0/install.sh | bash -s 0.13.0
kubectl create -f https://operatorhub.io/install/yugabyte-operator.yaml
kubectl create namespace yb-operator
curl  https://raw.githubusercontent.com/yugabyte/yugabyte-operator/master/deploy/crds/yugabyte_v1alpha1_ybcluster_full_cr.yaml | sed 's/tag: 2.1.2.0-b10/tag: ${versionTag}/g' | kubectl  create -f -
`
