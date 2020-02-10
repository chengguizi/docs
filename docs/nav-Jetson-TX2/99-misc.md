# Miscellaneous

## Development Kit Board

### Basic Flashing
http://developer.download.nvidia.com/embedded/L4T/r23_Release_v1.0/l4t_quick_start_guide.txt

make sure `./apply_binaries.sh` is executed once before any flashing

- to flash every partitions with rebuilding system.img: \
`sudo ./flash.sh jetson-tx2 mmcblk0p1`

- to flash without rebuilding system.img: \
`sudo ./flash.sh -r jetson-tx2 mmcblk0p1`

- to flash Kernel device tree blob: \
add `-k kernel-dtb`

## Check DTS file version

dmesg | grep "DTS File Name"


## Shutdown on power button

gsettings set org.gnome.settings-daemon.plugins.power button-power 'shutdown'

### UART
- UART2 on Auvidea J120 Rev 6, could be accessed from /dev/ttyTHS1

## Back-up Procedures

### Zerofree Unallocated Disk Space to Shrink File Size
- Clear trash and caches
   1. at `~/.cache/chromium/Default`
   2. at `~/.ros`
   3. Lastly, at  `~/.local/share/Trash/expunged/*`
- To check large files and directories \
   `sudo du -Sh | sort -rh | head -20`
- to clear unallocated disk space to zero \ 
   use `zerofree` utility
   1. boot into single user mode `sudo init 1`
   2. remount the filesystem to readonly (if failed, reboot the system and try again) `mount -o remount,ro /dev/mmcblk0p1`
   3. perform zerofree command `zerofree -v /dev/mmcblk0p1`
      - If the mounting is busy try stop services as followed
      - `killall dhclient` (this should make things work already)
      - `systemctl stop rsyslog`
      - `systemctl stop network-manager`


## Known Issues

- Fans is not working properly on Jetpack 4.2 [Link](https://devtalk.nvidia.com/default/topic/1060713/can-t-access-fan-jetpack-4-2-development-board-and-auvidea-j120-board-/)
