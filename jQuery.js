// Plays sounds for no reason
$(document).ready(function () {
	
	var audioElement = document.createElement("audio");

	$("#title").click(function(){
		audioElement.setAttribute("src","http://s1download-universal-soundbank.com/mp3/sounds/1035.mp3");
		audioElement.play();
		console.log("played");
	});

	$("#leader").click(function(){
		audioElement.setAttribute("src","http://s1download-universal-soundbank.com/mp3/sounds/11628.mp3");
		audioElement.play();
	});

	$("#button1").click(function(){
		audioElement.setAttribute("src","http://s1download-universal-soundbank.com/mp3/sounds/6702.mp3");
		audioElement.play();
	});

	$("#button2").click(function(){
		audioElement.setAttribute("src","http://s1download-universal-soundbank.com/mp3/sounds/8948.mp3");
		audioElement.play();
	});

	$("#button3").click(function(){
		audioElement.setAttribute("src","http://s1download-universal-soundbank.com/mp3/sounds/8046.mp3");
		audioElement.play();
	});
});