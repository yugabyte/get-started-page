export const yaml = `
mkdir ~/yugabyte && cd ~/yugabyte
wget https://raw.githubusercontent.com/YugaByte/yugabyte-db/master/cloud/kubernetes/yugabyte-statefulset-rf-1.yaml
`

export const helm = `
git clone https://github.com/YugaByte/yugabyte-db.git
cd ./yugabyte-db/cloud/kubernetes/helm/
kubectl create -f yugabyte-rbac.yaml
`
