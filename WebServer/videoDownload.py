from __future__ import unicode_literals
import youtube_dl


class MyLogger(object):
    def debug(self, msg):
        pass

    def warning(self, msg):
        pass

    def error(self, msg):
        print(msg)


def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')


ydl_opts = {}

def vidDownload(videoID):
	URL = "https://www.youtube.com/watch?v=" + videoID
	with youtube_dl.YoutubeDL(ydl_opts) as ydl:
		ydl.download([URL])

#def detectObject(videoID):
	
