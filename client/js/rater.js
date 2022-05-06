export function Rater(ratingElement) {
	const stars = ratingElement.querySelectorAll('.star');

	const setRating = ev => {
		ratingElement.setAttribute('data-rating', ev.currentTarget.getAttribute('data-value'));
	};

	const resetRating = ev => {
		const currentRating = ratingElement.getAttribute('data-rating');
		highlightRating(currentRating);
	};

	const highlightRating = rating => {
		stars.forEach(star => {
			star.style.color = rating >= star.getAttribute('data-value') ? 'Yellow' : 'White';
		});
	};

	resetRating();

	stars.forEach(star => {
		star.addEventListener('click', setRating);
	});

	ratingElement.addEventListener('mouseout', resetRating);
}
