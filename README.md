# 360_video_streaming_across_the_network
"360 video streaming across the network" project for "Advanced Projects at the Quality and Usability Lab" lecture at TU Berlin

## Technical requirements:
Supported operating system: Linux/Ubuntu

Python version 3.7 or greater

Installed Oculus Developer Hub (ODH):
>For Windows: https://developer.oculus.com/downloads/package/oculus-developer-hub-win

>For Mac: https://developer.oculus.com/downloads/package/oculus-developer-hub-mac

An Meta Quest 2 in Developer Mode: 
>https://developer.oculus.com/documentation/native/android/mobile-device-setup/

## Installation

1. Clone this repository 
```adb 
git clone https://github.com/streaming-across-network/360_video_streaming_across_the_network.git
```
2. Clone/download SRS 
```adb 
git clone -b 4.0release https://gitee.com/ossrs/srs.git
```
3. Put the SRS in the same directory as this project (360_video_streaming_across_the_network).

4. Build SRS (for more info look here: https://github.com/ossrs/srs/wiki/v4_EN_Home)
```adb 
cd srs/trunk
./configure
make
```
## Usage
After setting up the 360 camera [Go to Setting up 360 Camera (model GoPro Max) section](#Setting-up-360-Camera-(model-GoPro-Max)) and setting up setting up the Meta Quest 2 and the Oculus Developer Hub[Go to Real Cool Heading section](#real-cool-heading):

Run *start_srs.py* script. (on Linux)

```adb 
python3 start_srs.py
```

# Setting up 360 Camera (model GoPro Max):

You can find the instructions for connecting via the "Quick App" on the "presentation_360video.pdf" (Appendix-section down below).

Any other RTMP compatible camera will work too.

---

<br>

# Setting up the Meta Quest 2 and the Oculus Developer Hub (ODH):


<br>  
  
## Preparing the Meta Quest 2 and the ODH (one time only):
1.	Connect the Meta Quest 2 to your PC and copy the folder "hls.js" to the internal storage of the Headset.  
(next to the download and oculus folder)

2.	Create in ODH this custom command: 
```adb 
adb -s _ODH_CONNECTED_DEVICE_SERIAL_ID_ shell am start \-n com.oculus.os.vrbrowserlauncher/.MainActivity \-a android.intent.action.VIEW -d 'file:///storage/emulated/0/hls.js/index.html' 
```
<br>  
  
## Accessing the website with the livestream on the Meta Quest 2:

1.	Connect the Meta Quest 2 to your PC and run in ODH the created custom command.
2.	Disconnect and put on the Meta Quest 2.

## Credits
Big thanks to the SRS community (https://github.com/ossrs/srs) for enabling us the RTMP to HLS conversion using SRS.  
  
Cheers to the creators of hls.js for their JavaScript library.
>https://github.com/video-dev/hls.js/


## Authors
Yining Cong 

Christian Gumprecht 

Hanneng Hu          hanneng.hhu@gmail.com

Emirali Caferzade   caferzade@campus.tu-berlin.de

