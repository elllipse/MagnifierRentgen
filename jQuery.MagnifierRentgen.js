$.fn.magnifierRentgen = function() {

	return this.each(function() {
		
		var $th           = $(this),
		dataImage     = $th.data("image"),
		dataImageZoom = $th.data("image-zoom"),
		dataSize      = $th.data("size");

		function init() {
			appendSource();
			setImageWidth();
			setLoupeSize();
			setLoupeImg();
		};

		init();

		//EVENTS
		$th.hover(showLoupe, hideLoupe);
		$th.mousemove(onLoupeMove);
		$(window).resize(init);

		//FUNCTIONS
		function appendSource(magnifierRentgen) {
			if ( $th.hasClass("magnifierRentgen") ) {return};
			$th
			.addClass("magnifierRentgen")
			.append("<img class='data-image' src='"+dataImage+"'/>"
				+"<div class='magnifier-loupe'>"
				+"<img src='"+dataImageZoom+"'/>")
		}

		function showLoupe() {
			$th.find(".magnifier-loupe").stop().fadeIn()
		};

		function hideLoupe() {
			$th.find(".magnifier-loupe").stop().fadeOut()
		};

		function setImageWidth() {
			$th.find(".data-image").css({
				"width" : $th.width()})
		};
		
		function setLoupeSize() {
			$th.find(".magnifier-loupe").css({
				"width"  : dataSize,
				"height" : dataSize
			})
		};
		function setLoupeImg() {
			$th.find(".magnifier-loupe img").css({
				"position" : "absolute",
				"width" : $th.width()
			});
		};
		
		function onLoupeMove(e) {
			var elemPos = {},
			offset  = $th.offset();

			elemPos = {
				left: e.pageX - offset.left - dataSize/2,
				top: e.pageY - offset.top - dataSize/2,
			}

			$th
			.find(".magnifier-loupe").css({
				"top"  : elemPos.top,
				"left" : elemPos.left
			})
			.find("img").css({
				"top"   : -elemPos.top,
				"left"  : -elemPos.left,
				"width" :  $th.width()
			})
		}

	});

}
