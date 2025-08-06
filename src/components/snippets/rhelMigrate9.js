export const checkYBVersion = 'yb-voyager version';
export const disableDefaultPostgreSQL = 'sudo dnf -qy module disable postgresql';

export const installEpelRelease = 'sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm -y';
export const installMysqlCommunityRelease = 'sudo dnf install https://dev.mysql.com/get/mysql84-community-release-el9-1.noarch.rpm -y';
export const installOracleInstantClients = `OIC_URL="https://download.oracle.com/otn_software/linux/instantclient/215000" && \\
sudo dnf install -y \\
    $\{OIC_URL}/oracle-instantclient-tools-21.5.0.0.0-1.x86_64.rpm \\
    $\{OIC_URL}/oracle-instantclient-basic-21.5.0.0.0-1.x86_64.rpm \\
    $\{OIC_URL}/oracle-instantclient-devel-21.5.0.0.0-1.x86_64.rpm \\
    $\{OIC_URL}/oracle-instantclient-jdbc-21.5.0.0.0-1.x86_64.rpm \\
    $\{OIC_URL}/oracle-instantclient-sqlplus-21.5.0.0.0-1.x86_64.rpm`;
export const installPerlOpen = 'sudo dnf install perl-open.noarch -y';
export const installPostgreSQLRepos = 'sudo dnf --disablerepo=* install https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm -y';
export const installYB = 'sudo dnf install https://downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm -y';
export const installYBVoyager = 'sudo dnf install yb-voyager';
export const installYBVoyagerSpecificVersion = 'sudo dnf install yb-voyager-<VERSION>';

export const updateYBVoyager = 'sudo yum update yb-voyager';
export const updateYum = 'sudo dnf update';
