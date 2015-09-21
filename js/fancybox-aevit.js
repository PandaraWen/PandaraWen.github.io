
$(function() {
	var winWidth = $(window).width();
	$('.fancybox-aevit img').each(function(index, item) {
		var imgSrc = $(item).attr('src');
		var strIndex = imgSrc.indexOf('?imageView2');
		// console.log(index);
		// console.log(winWidth);
		if (strIndex && winWidth <= 678) {
			imgSrc = imgSrc.substring(0, strIndex);
			// console.log(imgSrc);
			imgSrc = imgSrc + "?imageView2/1/w/" + winWidth + "/h/" + winWidth;
			// imgSrc = imgSrc + "?imageView2/1/w/" + Math.floor(winWidth * 1.2) + "/h/" + Math.floor(winWidth * 1.2);
			$(item).attr('src', imgSrc);
			// console.log(imgSrc);
		}
		// if (index % 2 == 1) {
		// 	$('<br />').insertAfter($(item));
		// }
	});
})