# VidSearch
The chrome_extension folder contains the source code file for the extension. The source code is written in html, css, and javascript. The classifier folder contains the source code of the tensorflow classifier written in python.

# Installation Instructions

## Extension
In order to run the extension, open chrome, and go to chrome://extensions. Enable developer mode, click on load unpacked and select the directory that contains the manifest.json file. At this point, a greyed out button should appear in the top right. To test the extension, go to youtube.com, and then click on a video.

## Classifier
For the classifier to work, follow these steps. Note that the classifier requires Python 3.
1. Go to https://www.tensorflow.org/install/ and follow the instructions to download and install tensorflow
2. Go to https://github.com/tensorflow/models and clone the repo
3. Open the .bashrc file and add the following command `export TFPATH=DIRECTORY_CONTAINING_TF/tensorflow` where DIRECTORY_CONTAINING_TF is the path to the directory where you cloned the repo in step 2
4. Copy classifier/object_detector.py to the TFPATH/models/research/object_detection directory

## Web Server
For the web server to work, follow these steps. Note that the web server requires Python 3 as well.
1. Run the following command in order to install the necessary
  `pip3 install flask flask_restful flask_cors flask_jsonpify youtube_dl`
2. Run the following command in order to install ffmpeg `sudo apt-get install ffmpeg`

# Running VidSearch

Run the web server by navigating to VidSearch/WebServer and running the command `python3 web-server.py`. Open chrome and navigate to youtube.com. Click on a video and click on the extension's icon in the top right. Once the extension opens, the video will start downloading (note that if the extension is closed and opened again, the video will start downloading again. For the extension to remain open, right click inside it and click on inspect. This will open the developer tools and will ensure that the extension remain open even after switching windows.). Note that the classification might take a while, especially if tensorflow is running on the CPU.

Once the download finishes and the results are sent back, you will be able to search for any detected object in the video by entering the object's name in the textbox and clicking search. This will display a list of timestamps in which the classifier was able to find an instance of that object. Click on any timestamp in order to seek to that part of the video.
