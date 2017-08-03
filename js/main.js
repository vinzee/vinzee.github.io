/*
	Solid State by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {
	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	var	$window = $(window),
	$body = $('body'),
	$header = $('#header'),
	$banner = $('#banner');

	// Disable animations/transitions until the page has loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-loading');
		}, 100);
	});

	// Fix: Placeholder polyfill.
	// $('form').placeholder();

	// Prioritize "important" elements on medium.
	skel.on('+medium -medium', function() {
		$.prioritize(
			'.important\\28 medium\\29',
			skel.breakpoint('medium').active
		);
	});

// Header.
	if (skel.vars.IEVersion < 9){
		$header.removeClass('alt');
	}

	if ($banner.length > 0 &&	$header.hasClass('alt')) {
		$window.on('resize', function() { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom:		$header.outerHeight(),
			terminate:	function() { $header.removeClass('alt'); },
			enter:		function() { $header.addClass('alt'); window.location.hash = ''; },
			leave:		function() { $header.removeClass('alt'); }
		});
	}

	$(".story").scrollex({
		enter: function() {
			var name = $(this).data('name');
			ga('send', {
			  hitType: 'event',
			  eventCategory: 'Story',
			  eventAction: name,
			  eventLabel: name + 'Story'
			});
			window.location.hash = name;
		}
	});

})(jQuery);

GitHubActivity.feed({
    username: "vinzee",
    // repository: "your-repo", // optional
    selector: "#github-feed",
    limit: 4 // optional
});
