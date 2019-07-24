const code = `
wget https://downloads.yugabyte.com/yugabyte-1.3.0.0-darwin.tar.gz
tar xvfz yugabyte-1.3.0.0-darwin.tar.gz && cd yugabyte-1.3.0.0/
./bin/ysqlsh
`

export default code
