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

## Fix npm Global Install Permissions

First check, where npm point to, if you call:

`npm config get prefix`

If /usr is returned, you can do the following:

``` bash
mkdir ~/.npm-global
export NPM_CONFIG_PREFIX=~/.npm-global
export PATH=$PATH:~/.npm-global/bin
```
To make it permanent, add the `export` items in the `.bashrc`

## Install yarn package manager

*NOTE: Many have said yarn is no longer relevant, as it no longer has much advantages over Node.js
https://yarnpkg.com/lang/en/docs/install/#debian-stable