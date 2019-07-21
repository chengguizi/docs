---
order: 1
---
# Nvidia Intel Graphics Driver

## Remove existing Nvidia driver
`sudo apt-get purge nvidia-*`

## Install Nvidia Driver
- Go to https://www.nvidia.com/object/unix.html
- Download the latest driver in .run format
- Go to `init 1` state, and uninstall existing drivers if necessary
- Install .run (There might be false warnings, the might be safely ignored)

## Verify That Nouveau Driver is Disabled

``` bash
grep nouveau /var/log/Xorg.0.log
```
If it is not running, it should have been logged as `Unloading nouveau`

Alternatively, make sure `lsmod | grep nouveau` has no output.

## Verify The Running Kernel Module

`prime-select query`

## [Obsolete] Disable Nouveau Kernel Module

**This need not be done manually, instead the installation of Nvidia driver should create this file automatically!**

``` bash
sudo bash -c "echo blacklist nouveau > /etc/modprobe.d/blacklist-nvidia-nouveau.conf"
sudo bash -c "echo options nouveau modeset=0 >> /etc/modprobe.d/blacklist-nvidia-nouveau.conf"
```
------

cat /etc/modprobe.d/blacklist-nvidia-nouveau.conf
blacklist nouveau
options nouveau modeset=0

then do:
`sudo update-initramfs -u -k all`


## Install CUDA

install CUDA 10 from official website (.deb), and follow the instructions to add apt-key. Lastly:

`sudo apt install cuda`