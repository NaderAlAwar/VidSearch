import sys

sys.path.insert(0, '/home/nader/tensorflow/models/research')
sys.path.insert(0, '/home/nader/tensorflow/models/research/object_detection')
from object_detection import object_detection_tutorial

def detectObjects(frames):
	return object_detection_tutorial.getObjectsInFrames(frames)



#TODO: 
#how to get number of frames
#send found objects back to client