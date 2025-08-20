export const dockerImage = `docker pull yugabytedb/yb-voyager
docker save -o yb-voyager-image.tar yugabytedb/yb-voyager:latest
gzip yb-voyager-image.tar`;

export const dockerLoadAndExecutable = `gunzip yb-voyager-image.tar.gz
docker load --input yb-voyager-image.tar`;

export const dockerMoveScript = `chmod +x yb-voyager
sudo mv yb-voyager /usr/local/bin`;

export const dockerWrapper =
  'wget -O ./yb-voyager https://raw.githubusercontent.com/yugabyte/yb-voyager/main/docker/yb-voyager-docker';

export const voyagerVersion = 'yb-voyager version';

export const yumRHEL8 =
  'wget https://downloads.yugabyte.com/repos/airgapped/yb-voyager-latest-rhel-8-x86_64.tar.gz';

export const yumRHEL9 =
  'wget https://downloads.yugabyte.com/repos/airgapped/yb-voyager-latest-rhel-9-x86_64.tar.gz';

export const ubuntuBundle =
  'wget https://downloads.yugabyte.com/repos/airgapped/yb-voyager-latest_debian.tar.gz';

export const airgappedBundleExtract = 'tar -xvf <tar-bundle-name>';

export const airgappedInstallationScript =
  'wget -P </path/to/directory> raw.githubusercontent.com/yugabyte/yb-voyager/main/installer_scripts/install-voyager-airgapped.sh';

export const airgappedExecutableScript =
  'chmod +x /path/to/directory/install-voyager-airgapped.sh';

export const airgappedInstallScript = './install-voyager-airgapped.sh';

export const airgappedInstallScriptOptions =
  './install-voyager-airgapped.sh [options]';
