	$(document).ready(function() {
	var x1 = false;
	var x2 = false;
	var x3 = false;
	var x4 = true;
	//Added data-type to all product divs, selects and sets background color
	$("div[data-type='notebook']").css({"background-color": "red"})
	$("div[data-type='phone']").css({"background-color": "green"})
	$("div[data-type='tablet']").css({"background-color": "blue"})
	$("#clear").css({"background-color": "yellow"})
	//Adds event listeners for button to show/hide required items

	$("#notebooks").on('click', function() {
		if(!x1){$("#notebooks").css({"background-color": "yellow"})}else{$("#notebooks").css({"background-color": "grey"})}
		x1 = !x1;
		showGroup();
	});
	$("#phones").on('click', function() {
		if(!x2){$("#phones").css({"background-color": "yellow"})}else{$("#phones").css({"background-color": "grey"})}
		x2 = !x2;
		showGroup();
	});
	$("#tablets").on('click', function() {
		if(!x3){$("#tablets").css({"background-color": "yellow"})}else{$("#tablets").css({"background-color": "grey"})}
		x3 = !x3;
		showGroup();
	});
	$("#clear").on('click', function() {
		if(!x4){$("#clear").css({"background-color": "yellow"})}else{$("#clear").css({"background-color": "grey"})}
		x4 = !x4;
		showGroup();
	});


	function showGroup() {
			if(x4){
				$("div[data-type='phone']").show();
				$("div[data-type='tablet']").show();
				$("div[data-type='notebook']").show();
			}
			else{
				$("div[data-type='phone']").hide();
				$("div[data-type='tablet']").hide();
				$("div[data-type='notebook']").hide();
			}

			if(x1){
				$("div[data-type='notebook']").show();
			}
			
			if(x2){
				$("div[data-type='phone']").show();
			}
		
			if(x3){
				$("div[data-type='tablet']").show();
			}
	};



});
		
			
			


		
	