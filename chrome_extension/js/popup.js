// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

var url; 

$( document ).ready(function() {  
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    	url = tabs[0].url;
    	let URLdisplay = document.getElementById('textDiv');
    	var checkURL = url.search("watch");						//checks if URL contains "watch", if the user has opened a youtube video
    	if(checkURL == -1){										//if the user has not opened a youtube video
    		URLdisplay.innerHTML = "Click on a youtube video to begin your search";
    	}
    	else{
    		var id = url.replace("https://www.youtube.com/watch?v=", "");		//get the youtube video id
    		var videoInformation = $.getJSON('https://noembed.com/embed',
   				{format: 'json', url: url}, function (data) {
   				URLdisplay.innerHTML = data.title;
			});
        document.getElementById("downloadButton").disabled = false;
      }
	});
});

//TODO: send request to download video to server, then wait for confirmation


$('#searchButton').click(function(){
	
});
