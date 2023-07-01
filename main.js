$(window).resize(function() {
	let containerWidth = $('.striker_title').width();
	let greenLineWidth = containerWidth * 0.23
	$('.green_line').width(greenLineWidth);
});

$(window).resize(function() {
	let containerWidth = $('.striker_title').width();
	let greenLineWidth = containerWidth * 0.12
	$('.gray_line').width(greenLineWidth);
});