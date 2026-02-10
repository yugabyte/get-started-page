export const dbServerCode = (version, appVersion) => `
wget https://software.yugabyte.com/releases/${version}/yugabyte-${appVersion}-darwin-x86_64.tar.gz
echo "$(curl -L https://software.yugabyte.com/releases/${version}/yugabyte-${appVersion}-darwin-x86_64.tar.gz.sha) *yugabyte-${appVersion}-darwin-x86_64.tar.gz" | shasum --check && \\\ntar xvfz yugabyte-${appVersion}-darwin-x86_64.tar.gz && cd yugabyte-${version}/
./bin/yugabyted start
`;

export const dbAarch64Code = (version, appVersion) => `
wget https://software.yugabyte.com/releases/${version}/yugabyte-${appVersion}-darwin-arm64.tar.gz
echo "$(curl -L https://software.yugabyte.com/releases/${version}/yugabyte-${appVersion}-darwin-arm64.tar.gz.sha) *yugabyte-${appVersion}-darwin-arm64.tar.gz" | shasum --check && \\\ntar xvfz yugabyte-${appVersion}-darwin-arm64.tar.gz && cd yugabyte-${version}/
./bin/yugabyted start
`;

export const sqlShellCode = `
# Make sure you have downloaded and extracted the tar.gz as shown above
./bin/ysqlsh
`;

export const pgCommands = `
CREATE DATABASE yb_demo;
\\c yb_demo;
`;

export const ybDemoCommands = `
\\i share/schema.sql
\\i share/products.sql
\\i share/users.sql
\\i share/orders.sql
\\i share/reviews.sql
`;
