from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from videoDownload import vidDownload



app = Flask(__name__)
api = Api(app)


class downloadVideo(Resource):
	def get(self, videoID):
		vidDownload(videoID)
		

api.add_resource(downloadVideo, '/downloadVideo/<videoID>')


if __name__ == '__main__':
	app.run(port=5000)

#TODO: send message to client that download finished
#TODO: begin parsing video
#TODO: multithreaded maybe?
