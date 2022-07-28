# 360_video_streaming_across_the_network
"360 video streaming across the network" project for "Advanced Projects at the Quality and Usability Lab" lecture at TU Berlin

## Installation
Clone/download this repo and SRS (https://github.com/ossrs/srs), put them in the same directory.

For details about SRS installation, please check out: https://github.com/ossrs/srs/wiki/v4_EN_Home

## Usage
To use it, just run *start_srs.py* script.

## Credits
Big thanks to the SRS community (https://github.com/ossrs/srs) for abling us the RTMP to HLS conversion using SRS.  
  
Cheers to the creators of hls.js for their JavaScript library.
>https://github.com/video-dev/hls.js/

## Authors
Yining Cong 

Christian Gumprecht 

Hanneng Hu

Emirali Caferzade   caferzade@campus.tu-berlin.de

---

<br>

# Setting up the Meta Quest 2 and the Oculus Developer Hub (OHD):


## Preexisting requierments:

Installed Oculus Developer Hub (OHD):
>For Windows: https://developer.oculus.com/downloads/package/oculus-developer-hub-win

>For Mac: https://developer.oculus.com/downloads/package/oculus-developer-hub-mac

An Meta Quest 2 in Developer Mode: 
>https://developer.oculus.com/documentation/native/android/mobile-device-setup/
<br>  
  
## Preparing the Meta quest 2 and the ODH (one time only):
1.	Connect the Meta Quest 2 to your PC and copy the folder "hls.js" to the internal storage of the Headset.  
(next to the download and oculus folder)

2.	Create in OHD this custom command: 
```adb 
adb -s _ODH_CONNECTED_DEVICE_SERIAL_ID_ shell am start \-n com.oculus.os.vrbrowserlauncher/.MainActivity \-a android.intent.action.VIEW -d 'file:///storage/emulated/0/hls.js/index.html' 
```
<br>  
  
## Accessing the Website with the livestream on the Meta Quest 2:

1.	Connect the Meta Quest 2 to your PC and run in OHD the created custom command.
2.	Dissconnect and put on the Meta Quest 2.
