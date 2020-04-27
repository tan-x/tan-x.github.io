//script gives scrolling animation, unblurring items as they come on screen
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
	threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
//fade out header when scrolling off the top of viewport
$(window).on('scroll', function () {
	var pixs = $(document).scrollTop();
	pixs = pixs / 200;
	$('.smhead, .masthead').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
});
//fade out about article when scrolling off the top of viewport (slower rate/less exaggerated)
if ($(window).width() < 560) {
	$(window).on('scroll', function () {
		var pixs = $(document).scrollTop();
		pixs = (pixs - 400) / 400;
		$('#about').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
	});
}
