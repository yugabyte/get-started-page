export const cleanCache = `sudo apt-get clean
sudo apt-get update`;

export const installPostgreSQLCommon = `sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh`;
export const installVoyager = 'sudo apt-get install yb-voyager';
export const installYB = `wget https://downloads.yugabyte.com/repos/reporpms/yb-apt-repo_1.0.0_all.deb
sudo apt-get install ./yb-apt-repo_1.0.0_all.deb`;

export const ora2pgFailure =
  'Depends: ora2pg (= 23.2-yb.2) but 24.3-1.pgdg22.04+1 is to be installed';
export const ora2pgInstalling = 'sudo apt-get install ora2pg=23.2-yb.2';

export const updateVoyager = 'sudo apt-get upgrade yb-voyager';

export const ybVoyagerVersion = 'yb-voyager version';
