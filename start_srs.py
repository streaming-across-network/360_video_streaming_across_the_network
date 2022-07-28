import socket
import os
import tkinter as tk
from threading import Thread


def start_srs():
    """
    Get the current working directory and start srs
    """
    cwd = os.getcwd()  # current working directory
    path_to_trunk = cwd + "/srs/trunk"
    os.chdir(path_to_trunk)
    os.system("./objs/srs -c conf/hls.conf")


def create_info_window():
    """
    Create and prompt information window containing RTMP and HLS URL for the user
    """
    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)

    message = "This is the RTMP URL for the GoPro Quick App: \n rtmp://"+IPAddr+"/live/livestream \n\n\n\
        This is the HLS URL: \n http://"+IPAddr+":8080/live/livestream.m3u8 "
            
    popup = tk.Tk()
    popup.wm_title("!")
    label = tk.Label(popup, text=message, font=("Courier", 30))
    label.pack(side="top", fill="x", pady=10)
    B1 = tk.Button(popup, text="Okay", command=popup.destroy)
    B1.pack()
    popup.mainloop()


# create two new threads
t1 = Thread(target=start_srs)
t2 = Thread(target=create_info_window)

# start the threads
t1.start()
t2.start()


