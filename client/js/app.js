import { Rater } from './rater.js';
import { isLoggedIn } from './utils/helpers.js';

const indexLoginBtn = document.querySelector("#indexLoginBtn");

if (!isLoggedIn()) {
	document.body.classList.add('guest-user');
	indexLoginBtn.textContent = "Log in";
}else{
	indexLoginBtn.textContent = "Log out";
}

document.addEventListener('DOMContentLoaded', function () {
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater => {
		new Rater(rater);
	});
});
