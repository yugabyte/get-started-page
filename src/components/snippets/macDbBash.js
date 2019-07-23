const code = `
wget https://downloads.yugabyte.com/yugabyte-ce-1.3.0.0-darwin.tar.gz
tar xvfz yugabyte-ce-1.3.0.0-darwin.tar.gz && cd yugabyte-1.3.0.0/
./bin/yb-ctl create
`

export default code
