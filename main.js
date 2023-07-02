$(window).resize(function() {
	let containerWidth = $('.striker_title').width();
	let greenLineWidth = containerWidth * 0.23;
	let grayLineWidth = greenLineWidth / 2;
	$('.green_line').width(greenLineWidth);
	$('.gray_line').width(grayLineWidth);
  });
  
