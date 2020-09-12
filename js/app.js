// ********** set nav toggle ************
// select button,links and div
const btn = document.querySelector('.nav-toggle');
const divContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// add event listerner to button
btn.addEventListener('click', function() {
	const linksHeight = links.getBoundingClientRect().height;
	const containerHeight = divContainer.getBoundingClientRect().height;
	// set an if statent
	if (containerHeight === 0) {
		divContainer.style.height = `${linksHeight}px`;
	} else {
		divContainer.style.height = 0;
	}
});

// ********** smooth scroll(jquery) ************

$(document).ready(function() {
	$('.nav-bar a').on('click', function(e) {
		if (this.hash !== '') {
			e.preventDefault();
			let hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				1300,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});

// scroll to top(jquery)

$(document).ready(function() {
	// display button once the window is scrolled above
	$(window).scroll(function() {
		const scrollHeight = window.pageYOffset;
		if (scrollHeight > 200) {
			// css class name for my toplink button
			$('.top-link').fadeIn();
		} else {
			$('.top-link').fadeOut();
		}
	});

	// click event to scroll to top
	$('.top-link').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
});
