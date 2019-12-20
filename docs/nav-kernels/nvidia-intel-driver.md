---
order: 1
---
# Nvidia Intel Graphics Driver
1. go to [Nvidia]( https://www.nvidia.com/object/unix.html ) to download the latest driver in .run format
2. go to `single-user mode` and uninstall existing nvidia drivers
```
$ init 1
$ sudo apt-get purge nvidia-*
```
3. Verify That Nouveau Driver is Disabled: remove nvidia related config files under `/etc/modprobe.d/` and `/lib/modprobe.d/` 
4. excute the downloaded run file
```
$ ./NVIDIA-Linux-x86_64-440.44.run
```
5. update the following lines in grub file
   
`$ nano /etc/default/grub`

```
GRUB_CMDLINE_LINUX_DEFAULT="modprobe.blacklist=nouveau"
GRUB_CMDLINE_LINUX=""
```

`$ sudo update-grub`

6. verify the running kernel module`$ prime-select query `. Switch to nvidia if the current version is intel: `$ prime-select nvidia `


7. Install CUDA if necessary

install CUDA 10 from official website (.deb), and follow the instructions to add apt-key. Lastly:

`sudo apt install cuda`