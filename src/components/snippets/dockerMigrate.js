export const dockerImage = 'docker pull yugabytedb/yb-voyager';

export const dockerVolume = `
docker volume create --driver local \\
    --opt type=none \\
    --opt device=[PATH_TO_YOUR_EXPORT_DIR] \\
    --opt o=bind \\
    export-dir
`;

export const runVoyager = `wget -O ./yb-voyager https://raw.githubusercontent.com/yugabyte/yb-voyager/main/docker/yb-voyager-docker \\
    && chmod +x ./yb-voyager \\
    && sudo mv yb-voyager /usr/local/bin/yb-voyager
yb-voyager version`;

