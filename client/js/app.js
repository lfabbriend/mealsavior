import { Rater } from './rater.js';

import "../slider/js/types.js";
import "../components/index.js"
import { setSlider } from "../components/index.js";
import { slides } from "../slider/js/slides.js";

const btn = document.getElementById("logInBtn");

document.addEventListener('DOMContentLoaded', function(){
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater=>{
		new Rater(rater);
	});
});

const slider = setSlider(slides, true);
document.body.append(slider);