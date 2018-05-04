import sys
import os

sys.path.insert(0, os.environ.get('TFPATH')+'/models/research')
sys.path.insert(0, os.environ.get('TFPATH')+'/models/research/object_detection')
from object_detection import object_detector

def detectObjects(frames):
	return object_detector.getObjectsInFrames(frames)



#TODO: 
#how to get number of frames
#send found objects back to client