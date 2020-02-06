# Quick References

- to flash every partitions with rebuilding system.img: 
``` bash
sudo ./flash.sh jetson-tx2 mmcblk0p1
```

- to flash without rebuilding system.img: 
``` bash
sudo ./flash.sh -r jetson-tx2 mmcblk0p1
```



---
Nvidia Official Reference: [Flashing and Booting the Target Device](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fflashing.html%23wwpID0E0YJ0HA)

[Jetpack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
[L4T Archive](https://developer.nvidia.com/embedded/linux-tegra-archive)