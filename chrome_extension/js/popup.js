// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


var url;
var id;
var receivedObjects;
var player;
var query = { active: true, currentWindow: true };
var tabId;
var downloadDisplay;

function callback(tabs) {
  var currentTab = tabs[0]; // there will be only one in this array
  tabId = currentTab.id;
}

function skipToTime(time){
  console.log('Clicked tab with seconds equals ', time);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "skip-to-time", "time": time, "id" : id}, function(response) {
         console.log(response);
    });
  });
}

$( document ).ready(function() {  
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      url = tabs[0].url;
      let URLdisplay = document.getElementById('textDiv');

      var checkURL = url.search("watch");           //checks if URL contains "watch", if the user has opened a youtube video
      if(checkURL == -1){                   //if the user has not opened a youtube video
        URLdisplay.innerHTML = "Click on a youtube video to begin your search";
      }
      else{
        id = url.replace("https://www.youtube.com/watch?v=", "");   //get the youtube video id
        var videoInformation = $.getJSON('https://noembed.com/embed',
          {format: 'json', url: url}, function (data) {
          URLdisplay.innerHTML = data.title;
      });
        document.getElementById("searchButton").disabled = true;
        downloadDisplay = document.getElementById('downloadingVideo');
        downloadDisplay.innerHTML = "Downloading video ...";
        getVideo();
      }
  });
});

//TODO: send request to download video to server, then wait for confirmation

function getVideo(){
  $.getJSON("http://127.0.0.1:5000/downloadVideo/"+id, function(json){
    receivedObjects = json;
    console.log(receivedObjects);
    document.getElementById("searchButton").disabled = false;
    downloadDisplay.innerHTML = "Download finished";
  });
};

function secondsToTime(d) {
    d = Number(d);
    if(d==0){
      return "0 seconds";
    }
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

$('#searchButton').click(function(){
  var searchTerm = $('#objectName').val();
  var results = [];
  var i;
  var j;
  for (i = 0; i < receivedObjects.length; i++) { 
    for(j = 0; j < receivedObjects[i].length; j++){
      if(receivedObjects[i][j] === searchTerm){
        results.push(i);
      }
    }
  }
  try{
    document.getElementById("list").remove();
  }
  catch{

  }
  var list = $('<ol id = "list"/>');
  jQuery.each(results, function(index, value) {
    var id = value + '';
    var obj = $('<li />', {text: secondsToTime(value)});
    obj.attr("id",id);
    // obj.attr("onmouseover","");
    obj.attr("style","cursor: pointer;");
    obj.css('color','blue');
    obj.appendTo(list);
  });
  $('#objs').append(list);
  $(document).on('click','li',function(){
    skipToTime(Number($(this).attr("id")));
  })

});



