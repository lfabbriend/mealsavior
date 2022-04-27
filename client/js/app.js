import { Rater } from './rater.js';

const btn = document.getElementById("logInBtn");

document.addEventListener('DOMContentLoaded', function(){
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater=>{
		new Rater(rater);
	});
});