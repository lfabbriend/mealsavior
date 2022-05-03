//este archivo se supone que tiene que estar incluido dentro de app.js pero por alguna razon lo demas que esta en ese archivo rompe lo que tiene que hacer este
import { Rater } from './rater.js';

document.addEventListener('DOMContentLoaded', function () {
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater => {
		new Rater(rater);
	});
});
