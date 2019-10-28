export const dbServerCode = `
wget https://raw.githubusercontent.com/yugabyte/yugabyte-db/master/bin/yb-docker-ctl 
chmod +x yb-docker-ctl
./yb-docker-ctl create
`

export const sqlShellCode = `
docker exec -it yb-tserver-n1 /home/yugabyte/bin/ysqlsh -h yb-tserver-n1
`

export const ysqlCode = `
wget https://raw.githubusercontent.com/YugaByte/yb-sql-workshop/master/query-using-bi-tools/schema.sql
wget https://github.com/YugaByte/yb-sql-workshop/raw/master/query-using-bi-tools/sample-data.tgz
tar zxvf sample-data.tgz
docker cp ./schema.sql yb-tserver-n1:/home/yugabyte/.
docker exec -it yb-tserver-n1 bash && mkdir data
docker cp ./data/orders.sql yb-tserver-n1:/home/yugabyte/data/.
docker cp ./data/products.sql yb-tserver-n1:/home/yugabyte/data/.
docker cp ./data/reviews.sql yb-tserver-n1:/home/yugabyte/data/.
docker cp ./data/users.sql yb-tserver-n1:/home/yugabyte/data/.
docker exec -it yb-tserver-n1 /home/yugabyte/bin/ysqlsh -h yb-tserver-n1  --echo-queries
`

export const pgCommands = `
CREATE DATABASE yb_demo;
GRANT ALL ON DATABASE yb_demo to yugabyte;
\\c yb_demo;
`

export const ybDemoCommands = `
\\i 'schema.sql';
\\i 'data/products.sql'
\\i 'data/users.sql'
\\i 'data/orders.sql'
\\i 'data/reviews.sql'
`
