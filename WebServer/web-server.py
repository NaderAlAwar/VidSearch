from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from videoDownload import vidDownload
from getFrames import getFrames
from flask_cors import CORS
import json
import sys

sys.path.insert(0,'/home/nader/Projects/VidSearch/classifier')

from tf_caller import detectObjects


app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/downloadVideo/<videoID>')
def downloadVideo(videoID):
		vidDownload(videoID)
		numberOfFrames = getFrames("1")
		objectsFound = detectObjects(numberOfFrames)
		objectsJSON = jsonify(objectsFound)
		objectsJSON.status_code = 200
		return objectsJSON

if __name__ == '__main__':
	app.run(port=5000)

#TODO: send message to client that download finished
#TODO: begin parsing video
#TODO: multithreaded maybe?
