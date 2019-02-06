$(document).ready(function() {
		$("#moveme").css({"position":"absolute"})
	    $(document).mousemove(function (event) {
	    	tempx = event.pageX-120;
	    	tempy = event.pageY-120;
	        $("#moveme").stop()
	        			.animate({
	        				"left": tempx,
	        				"top": tempy
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