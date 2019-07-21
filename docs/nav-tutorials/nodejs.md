# Node.js

## Installation on Ubuntu (18.04/16.04)

[Reference](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

``` bash
## the following line is not needed for Ubuntu 18.04 as the dependencies are installed already
# sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```

To verify version 12 has been installed successfully:
``` bash
node -v 
npm -v
```
