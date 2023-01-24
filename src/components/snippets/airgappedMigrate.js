export const dockerImageAndWrapper = `docker pull yugabytedb/yb-voyager
docker save -o yb-voyager-image.tar yugabytedb/yb-voyager:latest
gzip yb-voyager-image.tar
wget -O ./yb-voyager https://raw.githubusercontent.com/yugabyte/yb-voyager/main/docker/yb-voyager-docker`;

export const dockerLoadAndExecutable = `gunzip yb-voyager-image.tar.gz
docker load --input yb-voyager-image.tar
chmod +x yb-voyager
sudo mv yb-voyager /usr/local/bin
yb-voyager version`;

export const yumInstallYB = 'sudo yum install https://s3.us-west-2.amazonaws.com/downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm';

// export const yumInstall = 'sudo yum install https://s3.us-west-2.amazonaws.com/downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm';

export const yumInstallEpel7 = `# For RHEL 7/CentOS 7
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm`;

export const yumInstallEpel8 = `# For RHEL 8/CentOS 8
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm`;

export const yumInstallPostgreSQL = 'sudo yum install pgdg-redhat-repo oracle-instant-clients-repo';

export const yumDisablePostgreSQLAndDownloadPerlOpen = `sudo dnf -qy module disable postgresql
sudo yum install --downloadonly --downloaddir=<path_to_directory> perl-open.noarch`;

export const yumDownloadVoyager = 'sudo yum install --downloadonly --downloaddir=<path_to_directory> yb-voyager';

export const yumInstall = `sudo yum install *
yb-voyager version`;

