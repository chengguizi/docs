# Preparing the Host Machine

The following instructions are intended to Jetson TX2, but it should be in principle similar to Jetson Xavier.


## Creating The Patched BSP

::: tip
You could safely skip this whole step, if the **Patched** BSP has been provided for you. (Typically contain the board name, such as 'J120' in the zip file)
:::

### What you need:
- The correct version of L4T BSP (provides Linux kernel, bootloader, NVIDIA drivers, and flashing utilities)
  - Auvidiea provides the matching Jetpack version, and each Jetpack is bundled with a particular L4T, take note.
- The correct version of Auvidea's custom firmware overlay

### The Steps
1. Unzip the BSP, using command line to preserve the permissions
``` bash
sudo tar -xpf Tegra186_Linux_Rxx.x.x_aarch64.tbz2
```

2. Rename the extracted Linux_for_Tegra folder, to indicate its target Auvidea board and firmware version. Such as `Linux_for_Tegra_J120_Dec2019`

3. Extract the corresponding J120 / J90 Firmware
``` bash
sudo tar -xpf J90_v2.2_4.2.2_spidev.tar.bz2
```

4. Navigate into the Auvidea firmware's Linux_for_Tegra folder, copy the files to overide Nvidia's Original, preserving permissions
``` bash
sudo cp -a * ./../../../Linux_for_Tegra_J120_Dec2019/
```

5. Double check by ensureing all relevant files in the BSP's folder is the same modification dates as the Auvidea's Firmware folder.

6. Apply binaries
``` bash
sudo ./apply_binaries.sh
```

6. You are done!