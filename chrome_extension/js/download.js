let youtubeVideoToFrames = require('youtube-video-to-frames')

function downloadVideo(videoID, fps){
	var URL = 'https://www.youtube.com/watch?v=' + videoID;
	options = {videoName: 'video', fps: fps, imgFileName: "img", downloadLocation: './'}
	youtubeVideoToFrames(youtubeUrl, options)
}