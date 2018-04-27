import subprocess
import glob
import os



def getFrames(fps):
	for path in glob.glob('images/*'):			#this will remove pre-existing images
		os.remove(path)
	command = ["ffmpeg", "-i", "video/video", "-r", fps, "images/image_%d.png"]
	subprocess.call(command)
	command = ["rm", "video/video"]
	subprocess.call(command)
	numberOfFrames = len(next(os.walk('/home/nader/Projects/VidSearch/WebServer/images'))[2])		#get number of frames generated
	return numberOfFrames
