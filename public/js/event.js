$(function() {
	var $window = $(window);
	var eventContainer = $('.event_dropthemoney');
	var cnt = 0;
	var timer = setInterval(function() {
		cnt ++;
		
		if( cnt === 1 ) {
			eventContainer.find('.coin_wrap').addClass('loding');
			clearInterval(timer);
		};
	}, 500);

	eventContainer.each(function(index) {
		var $self = $(this);
		var offsetCoords = $self.offset();

		$(window).scroll(function() {
			// If this section is in view
			if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
				
				// Check for other sprites in this section
				$('.parallax', $self).each(function(index) {
					var $sprite = $(this);
					var yPos = -($window.scrollTop() / $sprite.data('speed')) + $sprite.data('offsety');
					$sprite.css('top', yPos);
				});
			}
		});
	});
});
