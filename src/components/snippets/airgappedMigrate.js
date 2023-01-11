export const DownloadTarball7 = `// For RHEL 7 or CentOS 7
wget https://downloads.yugabyte.com/repos/airgapped/airgapped-rhel7.tar.gz`;

export const DownloadTarball8 = `// For RHEL 8 or CentOS 8
wget https://downloads.yugabyte.com/repos/airgapped/airgapped-rhel8.tar.gz`;

export const DownloadTarballUbuntu = `// For Ubuntu
wget https://downloads.yugabyte.com/repos/airgapped/airgapped_ubuntu.tar.gz`;

export const installRpm = `// For RHEL 7/8 or CentOS 7/8
sudo yum install *`;

export const installRpmUbuntu = `// For Ubuntu
sudo apt-get install ./*.deb`;

export const voyagerVersion = `yb-voyager version`;
