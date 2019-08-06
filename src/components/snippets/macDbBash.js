const code = `
wget https://downloads.yugabyte.com/yugabyte-1.3.1.0-darwin.tar.gz
tar xvfz yugabyte-1.3.1.0-darwin.tar.gz && cd yugabyte-1.3.1.0/
./bin/yb-ctl create
`

export default code
