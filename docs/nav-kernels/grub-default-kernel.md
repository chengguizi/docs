# Grub

## Change Default Kernel Version
[Reference](https://unix.stackexchange.com/questions/198003/set-default-kernel-in-grub)
- Obtain the kernel id string from `grep gnulinux /boot/grub/grub.cfg`
- Edit `/etc/default/grub` `GRUB_DEFAULT=<the kernel you want>`
- `sudo update-grub`

