export const disableDefaultPostgreSQL =
  'sudo dnf -qy module disable postgresql';

export const installEpelRelease =
  'sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm';
export const installOracleInstant =
  'sudo yum install oracle-instant-clients-repo';
export const installPerlOpen = 'sudo yum install perl-open.noarch';
export const installPostgreSQLRepos =
  'sudo yum --disablerepo=* -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm';
export const installVoyager = 'sudo yum install yb-voyager';
export const installVoyagerSpecificVersion =
  'sudo yum install yb-voyager-<VERSION>';
export const installYB =
  'sudo yum install https://software.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm?os=rhel-8';

export const updateVoyager = 'sudo yum update yb-voyager';
export const updateYum = 'sudo yum update';

export const voyagerVersion = 'yb-voyager version';
