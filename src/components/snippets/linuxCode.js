export const dbServerCode = `
wget https://downloads.yugabyte.com/yugabyte-1.3.1.0-linux.tar.gz
tar xvfz yugabyte-1.3.1.0-linux.tar.gz && cd yugabyte-1.3.1.0/
./bin/post_install.sh
./bin/yb-ctl create
`

export const sqlShellCode = `
# Make sure you have downloaded and untarred the tar.gz as shown above
./bin/ysqlsh
`

export const ysqlCode = `
wget https://raw.githubusercontent.com/YugaByte/yb-sql-workshop/master/query-using-bi-tools/schema.sql
wget https://github.com/YugaByte/yb-sql-workshop/raw/master/query-using-bi-tools/sample-data.tgz
tar zxvf sample-data.tgz
./bin/ysqlsh
`

export const pgCommands = `
CREATE DATABASE yb_demo;
GRANT ALL ON DATABASE yb_demo to postgres;
\\c yb_demo;
`

export const ybDemoCommands = `
\\i 'schema.sql';
\\i 'data/products.sql'
\\i 'data/users.sql'
\\i 'data/orders.sql'
\\i 'data/reviews.sql'
`
