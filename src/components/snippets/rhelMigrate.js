export const disablePostgreSQLAndInstallPerlOpen = `sudo dnf -qy module disable postgresql
sudo yum install perl-open.noarch`;

export const installEpelRelease7 = `# For RHEL 7 or CentOS 7
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm`;

export const installEpelRelease8 = `# For RHEL8 or Centos 8
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm`;

export const installRedhatRepo = 'sudo yum install pgdg-redhat-repo oracle-instant-clients-repo';

export const installYB = `sudo yum update
sudo yum install https://s3.us-west-2.amazonaws.com/downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm`;

export const installYBVoyager = `sudo yum update
sudo yum install yb-voyager
yb-voyager version`;
