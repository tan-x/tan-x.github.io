// Script gives filter effects on hover for portfolio items
$(document).ready(function () {
	$('#item1').hover(
		function () {
			$('#img1').css('filter', 'opacity(85%)');
			$('#item1').css('background-color', 'white');
		},
		function () {
			$('#img1').css('filter', 'opacity(60%) blur(4px)');
			$('#item1').css('background-color', 'rgba(255, 255, 255, 0.3)');
		}
	);

	$('#item2').hover(
		function () {
			$('#img2').css('filter', 'opacity(85%)');
		},
		function () {
			$('#img2').css('filter', 'opacity(60%) blur(4px)');
		}
	);

	$('#item3').hover(
		function () {
			$('#img3').css('filter', 'opacity(85%)');
		},
		function () {
			$('#img3').css('filter', 'opacity(60%) blur(4px)');
		}
	);

	$('#item4').hover(
		function () {
			$('#img4').css('filter', 'opacity(85%)');
		},
		function () {
			$('#img4').css('filter', 'opacity(60%) blur(4px)');
		}
	);

	$('#item5').hover(
		function () {
			$('#img5').css('filter', 'opacity(85%)');
		},
		function () {
			$('#img5').css('filter', 'opacity(60%) blur(4px)');
		}
	);

	$('#item6').hover(
		function () {
			$('#img6').css('filter', 'opacity(85%)');
		},
		function () {
			$('#img6').css('filter', 'opacity(60%) blur(4px)');
		}
	);
});
