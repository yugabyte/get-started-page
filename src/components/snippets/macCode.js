export const dbServerCode = `
wget https://downloads.yugabyte.com/yugabyte-2.2.0.0-darwin.tar.gz
tar xvfz yugabyte-2.2.0.0-darwin.tar.gz && cd yugabyte-2.2.0.0/
./bin/yugabyted start
`

export const sqlShellCode = `
# Make sure you have downloaded and extracted the tar.gz as shown above
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
