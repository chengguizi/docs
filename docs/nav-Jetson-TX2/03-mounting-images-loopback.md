# How to mount .img.raw as read-write

- Example to setup the image file as loopback device, without mounting
   > `sudo losetup /dev/loop17 backup_190416.img.raw`
- Example to check disk integrity
   > `sudo fsck.ext4 -f /dev/loop17`
- Example to mount the loopback device, with read-write permissions
   > `sudo mount /dev/loop17 /mnt/loopback/`
- Remember to `sync` before you umount
- Example to umount
   > `sudo umount /dev/loop17`
   > `sudo losetup -d /dev/loop17`