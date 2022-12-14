# 360_video_streaming_across_the_network to Meta Quest 2
"360 video streaming across the network" project for "Advanced Projects at the Quality and Usability Lab" lecture at TU Berlin

### Technical requirements:

<ins>Required operating system for [network part](Installation-of-network-part): Linux/Ubuntu</ins>

Python version 3.7 or greater:
>https://www.python.org/downloads/release/python-370/

<ins>Required operating system for [setting up Meta Quest 2](Setting-up-the-Meta-Quest-2-and-the-Oculus-Developer-Hub-(ODH)): Windows/Mac</ins>

Installed Oculus Developer Hub (ODH):
>For Windows: https://developer.oculus.com/downloads/package/oculus-developer-hub-win

>For Mac: https://developer.oculus.com/downloads/package/oculus-developer-hub-mac

An Meta Quest 2 in Developer Mode: 
>https://developer.oculus.com/documentation/native/android/mobile-device-setup/

<br>

## Installation of network part

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
<br>

## Setting up 360 Camera (model GoPro Max):

You can find the instructions for connecting via the "Quick App" on the "presentation_360video.pdf" [appendix-section down below](https://github.com/streaming-across-network/360_video_streaming_across_the_network/blob/master/presentation_360video.pdf).

Any other RTMP compatible camera will work too.

<br>

## Setting up the Meta Quest 2 and the Oculus Developer Hub (ODH):

1.	Connect the Meta Quest 2 to your PC and copy the folder "hls.js" to the internal storage of the Headset.  
(next to the download and oculus folder)

2.	Create in ODH this custom command: 
```adb 
adb -s _ODH_CONNECTED_DEVICE_SERIAL_ID_ shell am start \-n com.oculus.os.vrbrowserlauncher/.MainActivity \-a android.intent.action.VIEW -d 'file:///storage/emulated/0/hls.js/index.html' 
```
<br>  


## Usage
After *setting up the 360 camera* as described in [here](#setting-up-360-camera-model-gopro-max) and *setting up the Meta Quest 2 and the Oculus Developer Hub* as described in [here](#setting-up-the-meta-quest-2-and-the-oculus-developer-hub-ODH):

Run *start_srs.py* script. (on Linux)

```adb 
python3 start_srs.py
```
The script will output a RTMP-URL and HLS-URL. Instructions for usage you can find in the [appendix](https://github.com/streaming-across-network/360_video_streaming_across_the_network/blob/master/presentation_360video.pdf).

Note: The website will ask for the IP-address which you can find in both URLs 
e.g. (rtmp://<ins>192.168.0.106</ins>/live/livestream) 
<br>

*For this to work we refer to the [technical requirements](#Technical-requirements) of the Oculus Develper Hub (ODH) for which we need the
[Meta Quest 2- Developer Mode](https://developer.oculus.com/documentation/native/android/mobile-device-setup/).*

Accessing the website with the livestream on the Meta Quest 2:

1.	Connect the Meta Quest 2 to your PC and run in ODH the created custom command.
2.	Disconnect and put on the Meta Quest 2.
3.	Refresh the Website on the opened browser to give it permission to access local data. (one time only)
4.	On the appearing promt enter the IP-address of the streaming server.
5.	Press the playbutton to play the livestream and enlarge it.
6.	Choose the video format of you livestream. (180?? or 360??)

For image instructions you can also look at the [appendix](https://github.com/streaming-across-network/360_video_streaming_across_the_network/blob/master/presentation_360video.pdf).

<br>

### Credits
Big thanks to the SRS community (https://github.com/ossrs/srs) for enabling us the RTMP to HLS conversion using SRS.  
  
Cheers to the creators of hls.js for their JavaScript library.
>https://github.com/video-dev/hls.js/


### Authors
Yining Cong 

Christian Gumprecht 

Hanneng Hu          hanneng.hhu@gmail.com

Emirali Caferzade   caferzade@campus.tu-berlin.de

