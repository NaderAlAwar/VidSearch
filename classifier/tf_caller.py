import sys

sys.path.insert(0, '/home/nader/tensorflow/models/research')
sys.path.insert(0, '/home/nader/tensorflow/models/research/object_detection')
from object_detection import object_detection_tutorial

print(object_detection_tutorial.getObjectsInFrames(5))