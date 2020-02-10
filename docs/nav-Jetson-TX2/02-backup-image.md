# Backup TX2 Image

## How to save space before you back up

- Clear trash and caches
   1. at `~/.cache/chromium/Default`
   2. at `~/.ros`
   3. at  `~/.local/share/Trash/expunged/*`
   4. at `/var/log` use command `truncate -s 0 /var/log/syslog` [refernce](https://askubuntu.com/questions/436051/i-cannot-clear-syslog-but-i-can-remove-it)
- To check large files and directories \
   `sudo du -Sh | sort -rh | head -20`
- To clear unallocated disk space to zero \ 
   use `zerofree` utility
   1. boot into single user mode `sudo init 1` (init level 3 may not work. If no keyboard response, try switch to init 3 first and then into init 1 state, after a fresh reboot)
   2. remount the filesystem to readonly (if failed, reboot the system and try again) `mount -o remount,ro /dev/mmcblk0p1`
   3. perform zerofree command `zerofree -v /dev/mmcblk0p1`
      - If the mounting is busy try stop services as followed
      - `killall dhclient` (this should make things work already)
      - `systemctl stop rsyslog`
      - `systemctl stop network-manager`
   4. regarding the meaning of the zerofree output:
      ```
      So after some detailed analysis it would look like those numbers are as follows:

      - number of nonzero blocks encountered
      - number of free blocks within the filesystem
      - total number of blocks within the filesystem

      ```

# Backup Procedure
1. To minimise image size, consider using `zerofree` utility to erase unallocated disk space to zeros, in read-only filesystem mount within TX2.
2. In the `Linux_for_Tegra/ folder`, perform backup of the APP partition
   > `sudo ./flash.sh -r -k APP -G backup.img jetson-tx2 mmcblk0p1`

[Flashing Guide](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fflashing.html%23)

---

## Regarding Sparse Image (*.img.raw)

```
Historically there was not always a sparse (compressed image), but due to how long it took to copy over USB2 the sparse image had support added. Prior to sparse images the flash program just used the raw image directly. The current flash program can still use an uncompressed/raw image. The order of dealing with flash images is that "bootloader/system.img" is created; this is then moved to "bootloader/system.img.raw", and then system.img.raw is used to compress into system.img. flash.sh does not care if system.img is raw or sparse, it works.
```
https://devtalk.nvidia.com/default/topic/1009158/jetson-tx2/cloning-or-taking-snapshot-of-tx2-board/

- To make the sparse .img out of .img.raw, use the following command \
   > `./mksparse -v --fillpattern=0 system.img.raw system.img`