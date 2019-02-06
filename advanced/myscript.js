$(document).ready(function() {
		$("#moveme").css({"position":"absolute"})
	    $(document).mousemove(function (event) {
	    	console.log(event)
	        $("#moveme").stop()
	        			.animate({
	        				"left": event.pageX-120, 
	        				"top": event.pageY-120
	        			}, "slow", "linear");
	    });
	    $("#moveme").mousedown(function() {
	    	$("#moveme").stop()
	    				.animate({
	    					"top": "1000"
	    				}, "slow", "linear")
	    				.fadeOut()
    					.animate({
    						"left": tempx, "top": tempy
    					}, "slow", "linear");
	    	$("#moveme").fadeIn();

	    });
});