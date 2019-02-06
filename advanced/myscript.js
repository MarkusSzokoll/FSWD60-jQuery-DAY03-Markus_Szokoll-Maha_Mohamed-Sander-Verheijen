$(document).ready(function() {
	//Sets absolute position to enable movement by left and top css atts
	$("#moveme").css({"position":"absolute"})
	//When the mouse moved do:
    $(document).mousemove(function (event) {
    	//Store values for use later
    	tempx = event.pageX-120;
    	tempy = event.pageY-120;
    	//Stop() cancels previous animation, animate to mouse by setting left and top to mouse positions
        $("#moveme").stop()
        			.animate({
        				"left": tempx,
        				"top": tempy
        			}, "slow", "linear");
    });
    //When the mouse clicks on the plane
    $("#moveme").mousedown(function() {
    	//Animate top 1000 drops plane off screen, fadeOut() to hide, second animate() moves plane back to mouse, then fadeIn()
    	$("#moveme").stop()
    				.animate({
    					"top": "1000"
    				}, "slow", "linear")
    				.fadeOut()
					.animate({
						"left": tempx, "top": tempy
					}, "fast", "linear")
					.fadeIn();
    });
});