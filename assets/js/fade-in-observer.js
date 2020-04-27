const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

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

$(window).on('scroll', function () {
	var pixs = $(document).scrollTop();
	pixs = pixs / 200;
	$('.smhead, .masthead').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
});


if ($(window).width() < 560){
    $(window).on('scroll', function () {
        var pixs = $(document).scrollTop();
        pixs = (pixs - 400) / 400;
        $('#about').css({ '-webkit-filter': 'blur(' + pixs + 'px)', filter: 'blur(' + pixs + 'px)' });
    });
};

