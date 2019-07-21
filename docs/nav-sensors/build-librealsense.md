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