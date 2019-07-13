const code = `
wget https://downloads.yugabyte.com/yugabyte-ce-1.2.12.0-linux.tar.gz
tar xvfz yugabyte-ce-1.2.12.0-linux.tar.gz && cd yugabyte-1.2.12.0/
./bin/ysqlsh
`

export default code
