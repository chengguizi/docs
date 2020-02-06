# Backup TX2 Image
1. To minimise image size, consider using `zerofree` utility to erase unallocated disk space to zeros, in read-only filesystem mount within TX2.
2. In the `Linux_for_Tegra/ folder`, perform backup of the APP partition
   > `sudo ./flash.sh -r -k APP -G backup.img jetson-tx2 mmcblk0p1`

---

## Regarding Sparse Image (*.img.raw)

```
Historically there was not always a sparse (compressed image), but due to how long it took to copy over USB2 the sparse image had support added. Prior to sparse images the flash program just used the raw image directly. The current flash program can still use an uncompressed/raw image. The order of dealing with flash images is that "bootloader/system.img" is created; this is then moved to "bootloader/system.img.raw", and then system.img.raw is used to compress into system.img. flash.sh does not care if system.img is raw or sparse, it works.
```
https://devtalk.nvidia.com/default/topic/1009158/jetson-tx2/cloning-or-taking-snapshot-of-tx2-board/

- To make the sparse .img out of .img.raw, use the following command \
   > `./mksparse -v --fillpattern=0 system.img.raw system.img`