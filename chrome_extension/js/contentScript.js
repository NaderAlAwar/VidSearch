chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
    if( request.message === "skip-to-time" ) {
      console.log(request.time);
      var player = document.getElementsByTagName("video")[0];
      player.currentTime = request.time;
      try{
      player.seekTo(request.time, true);}
      catch(err){
        console.log(err);
      }
      sendResponse({success:'moved to time ' + request.time});
    }
  }
);