import { Rater } from './rater.js';
import { isLoggedIn } from './utils/helpers.js';

if (!isLoggedIn()) {
	document.body.classList.add('guest-user');
}

document.addEventListener('DOMContentLoaded', function () {
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater => {
		new Rater(rater);
	});
});
