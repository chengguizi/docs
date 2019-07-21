# OpenCV

## Install OpenCV 4 from Source (with CUDA)

- Clone repos of OpenCV and OpenCV Contrib, and
- Checkout the matching release (e.g. 4.1.0)
``` bash
cd ~/opencv
mkdir build
cd build

cmake -D CMAKE_BUILD_TYPE=RELEASE \
	-D CMAKE_INSTALL_PREFIX=/usr/local \
	-D INSTALL_PYTHON_EXAMPLES=ON \
	-D INSTALL_C_EXAMPLES=OFF \
	-D OPENCV_ENABLE_NONFREE=ON \
	-D OPENCV_EXTRA_MODULES_PATH=../../opencv_contrib/modules \
	-D PYTHON_EXECUTABLE=/usr/bin/python3 \
	-D BUILD_EXAMPLES=ON \
	-D WITH_CUDA=ON \
	-D CUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda-10.0 \
	-D CUDA_ARCH_BIN="6.0 6.1 7.0 7.5" \
	-D BUILD_opencv_cudacodec=OFF \
	..
	
```


Reference: https://www.pugetsystems.com/labs/hpc/How-To-Install-CUDA-10-together-with-9-2-on-Ubuntu-18-04-with-support-for-NVIDIA-20XX-Turing-GPUs-1236/

Reference 2: https://gist.github.com/Mahedi-61/804a663b449e4cdb31b5fea96bb9d561