$(document).ready(function() {
	//Added data-type to all product divs, selects and sets background color
	$("div[data-type='notebook']").css({"background-color": "red"})
	$("div[data-type='phone']").css({"background-color": "green"})
	$("div[data-type='tablet']").css({"background-color": "blue"})
	//Adds event listeners for button to show/hide required items
	$("#notebooks").on('click', function() {
		$("div[data-type='notebook']").show();
		$("div[data-type='phone']").hide();
		$("div[data-type='tablet']").hide();
	});
	$("#phones").on('click', function() {
		$("div[data-type='notebook']").hide();
		$("div[data-type='phone']").show();
		$("div[data-type='tablet']").hide();
	});
	$("#tablets").on('click', function() {
		$("div[data-type='notebook']").hide();
		$("div[data-type='phone']").hide();
		$("div[data-type='tablet']").show();
	});
	$("#clear").on('click', function() {
		$("div[data-type='notebook']").show();
		$("div[data-type='phone']").show();
		$("div[data-type='tablet']").show();
	});
});
