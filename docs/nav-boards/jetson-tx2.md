# Nvidia Jetson TX2

## Development Kit Board

## Auvidea J120

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