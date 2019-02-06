$(document).ready(function() {
	//Sets absolute position to enable movement by left and top css atts
	$("#moveme").css({"position":"absolute",
                    "left":1,
                    "top":1
    });
	//When the mouse moved do:
    $(document).mousemove(function (event) {
    	//Store values for use later
    	mousex = event.pageX;
    	mousey = event.pageY;
        planex = $("#moveme").position().left;
        planey = $("#moveme").position().top;
        //Its broken but it shouldn't be please kill me
        // lengthx = Math.sqrt(Math.pow(planex,2)+Math.pow(mousex,2));
        // lengthy = Math.sqrt(Math.pow(planey,2)+Math.pow(mousey,2));
        // dotProd = (mousex*planex)+(mousey*planey);
        // toArcCos = (dotProd)/(lengthx*lengthy);
        // angle = (Math.acos(toArcCos))*(180/Math.PI);
        // console.log(angle + " " + lengthx + " " + lengthy + " " + dotProd)
    	//Stop() cancels previous animation, animate to mouse by setting left and top to mouse positions
        $("#moveme").stop()
        			.animate({
        				"left": mousex-120,
        				"top": mousey-120
        			}, "slow", "linear")
        //             .css({'transform': 'rotate('+angle+'deg)'});

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
						"left": mousex, "top": mousey
					}, "fast", "linear")
					.fadeIn();
    });
});