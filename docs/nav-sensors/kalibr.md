# Camera Calibration - Kalibr Toolbox

## Kalibr Installation for Ubuntu 18.04

### Step 1: Clone the repo
- for OpenCV 2.X: https://github.com/ethz-asl/kalibr
- for OpenCV 4.X: https://github.com/chengguizi/kalibr

### Step 2: Install Dependencies
``` bash
sudo apt install libv4l-dev # for building
sudo apt install python-setuptools python-rosinstall ipython libeigen3-dev libboost-all-dev doxygen libopencv-dev software-properties-common libpoco-dev python-matplotlib python-scipy python-git python-pip ipython libtbb-dev libblas-dev liblapack-dev # for executing
sudo pip install python-igraph --upgrade # for executing
```

### Step 3: Catkin Build
``` bash
catkin build -DCMAKE_BUILD_TYPE=Release -j8
```


## Running Kalibr

``` bash
kalibr_calibrate_cameras --bag [filename.bag] --topics [TOPIC_0 ... TOPIC_N] --models [MODEL_0 ... MODEL_N] --target [target.yaml]
```
The model we used: **pinhole-radtan**

The target we used:
``` yaml
target_type: 'aprilgrid' #gridtype
tagCols: 4                  #number of apriltags
tagRows: 6                  #number of apriltags
tagSize: 0.1635              #size of apriltag, edge to edge [m]
tagSpacing: 0.17737             #ratio of space between tags to tagSize, for our apriltag spacing = 0.029
```

## Transformation Convention in Kalibr

Example 1:
``` yaml
baseline T_1_0:
	q: [ 0.00004712 -0.0000099  -0.00042935  0.99999991] +- [0.00063082 0.0010627  0.00012383]
	t: [-0.12202708  0.00016783 -0.00060357] +- [0.00031463 0.00027784 0.00061994]
```
This `q` represent the inverse rotation of the one in *T_cn_cnm1*. Hence, this represent the active rotation from cam0 to cam1

T_cn_cnm1:
camera extrinsic transformation, always with respect to the last camera in the chain
(e.g. cam1: T_cn_cnm1 = T_c1_c0, takes cam0 to cam1 coordinates)

Note: active rotation from cam1 to cam0 <==> change of base from cam0 to cam1

## Working with ZED Camera
### TR Convention in ZED Calibration File
By experiment, the CV, CX, CZ rotation parameters seem to be consistent with T_cn_cnm1 in Kalibr.

Conversions could be done by MATLAB functions, such as:
``` MATLAB
quat = quaternion([ 0.999999906669551  -0.000047117985545   0.000009904710518   0.000429351465965 ]); % [w x y z]
rotationVector = rotvec(quat)
```