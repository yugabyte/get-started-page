export const disablePostgreSQL = 'sudo dnf -qy module disable postgresql';

export const installEpelRelease7 = `// For RHEL 7 or CentOS 7
sudo yum install epel-release`;

export const installEpelRelease8 = `// For RHEL8 or Centos 8
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm`;

export const installPerlOpen = 'sudo yum install perl-open.noarch';

export const installRedhatRepo = 'sudo yum install pgdg-redhat-repo oracle-instant-clients-repo';

export const installYB = 'sudo yum install https://s3.us-west-2.amazonaws.com/downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.0-0.noarch.rpm';

export const installYBVoyager = 'sudo yum install yb-voyager';

export const voyagerVersion = 'yb-voyager version';

export const yumUpdate = 'sudo yum update';
