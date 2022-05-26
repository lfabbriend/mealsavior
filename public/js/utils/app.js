import { Rater } from './rater.js';
import { isLoggedIn } from './helpers.js';

const indexLoginBtn = document.querySelector("#indexLoginBtn");
const indexLoginBtnMenu = document.querySelector("#indexLoginBtn2");

if (!isLoggedIn()) {
	document.body.classList.add('guest-user');
	indexLoginBtn.textContent = "Log in";
	indexLoginBtnMenu.textContent = "Log in";
}else{
	indexLoginBtn.textContent = "Log out";
	indexLoginBtnMenu.textContent = "Log out";
}

document.addEventListener('DOMContentLoaded', function () {
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater => {
		new Rater(rater);
	});
});
