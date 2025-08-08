export const dockerImage = 'docker pull yugabytedb/yb-voyager';

export const runVoyager = 'wget -O ./yb-voyager https://raw.githubusercontent.com/yugabyte/yb-voyager/main/docker/yb-voyager-docker && chmod +x ./yb-voyager && sudo mv yb-voyager /usr/local/bin/yb-voyager';

export const updateVoyager = 'yb-voyager version';
