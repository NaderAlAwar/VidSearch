from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from videoDownload import vidDownload
from getFrames import getFrames
import sys

sys.path.insert(0,'/home/nader/Projects/VidSearch/classifier')

from tf_caller import detectObjects


app = Flask(__name__)
api = Api(app)


class downloadVideo(Resource):
	def get(self, videoID):
		vidDownload(videoID)
		numberOfFrames = getFrames("1")
		print(numberOfFrames)
		print(detectObjects(numberOfFrames))

		

api.add_resource(downloadVideo, '/downloadVideo/<videoID>')


if __name__ == '__main__':
	app.run(port=5000)

#TODO: send message to client that download finished
#TODO: begin parsing video
#TODO: multithreaded maybe?
