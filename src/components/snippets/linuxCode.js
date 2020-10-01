export const dbServerCode = (version) => `
wget https://downloads.yugabyte.com/yugabyte-${version}-linux.tar.gz
tar xvfz yugabyte-${version}-linux.tar.gz && cd yugabyte-${version}/
./bin/post_install.sh
./bin/yugabyted start
`

export const sqlShellCode = `
# Make sure you have downloaded and extracted the tar.gz file as shown above
./bin/ysqlsh
`

export const pgCommands = `
CREATE DATABASE yb_demo;
\\c yb_demo;
`

export const ybDemoCommands = `
\\i share/schema.sql
\\i share/products.sql
\\i share/users.sql
\\i share/orders.sql
\\i share/reviews.sql
`
