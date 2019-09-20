# RealSense D4XX / T2XX

## Installation on Auvidea J120 Board

The original kernel on J120 is `Linux tegra-ubuntu 4.4.38-tegra #1 SMP PREEMPT Mon Apr 30 16:06:06 CEST 2018 aarch64 aarch64 aarch64 GNU/Linux`

All the following instructions should be run directly on the TX2 machine with Internet access.

### Building Custom Kernel

- On the TX2 machine, run `git clone https://github.com/chengguizi/buildLibrealsense2TX`
- Download, configure and build the kernel 4.4 by running `./buildPatchedKernel.sh`
  - Note: the script will call `make xconfig`, which requires GUI interface
  - In the "Kernel Configuration", search `HID_SENSOR`, and tick `HID Sensors framework support`, `HID Accelerometer 3D`,`HID Gyroscope 3D`, `HID Magnetometer 3D`,`IIO_TRIGGER`,`HID_SENSOR_IIO_COMMON`,`HID_SENSOR_IIO_TRIGGER` as modules (M) or (Y)
  - Start the building process and wait...

After successful installation and restart, the kernel info from `uname -a` should be updated to the current date, for example:
`Linux tegra-ubuntu 4.4.38-tegra #1 SMP PREEMPT Mon Jul 22 11:16:42 +08 2019 aarch64 aarch64 aarch64 GNU/Linux`

## patch kernel
``` bash
./scripts/setup_udev_rules.sh
./scripts/patch-realsense-ubuntu-lts.sh
```


## build source

``` bash
mkdir build
cd build

cmake ../ -DCMAKE_BUILD_TYPE=Release -DBUILD_EXAMPLES=true -DBUILD_WITH_TM2=true

sudo make uninstall && make clean && make -j8

sudo make install
```

## Dynamic Connecting and Removing Devices

https://www.jianshu.com/p/562460ce5cf4