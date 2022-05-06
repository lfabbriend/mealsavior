import { Rater } from './rater.js';
import { setSlider } from '../components/slider.js';
import './login.js';

const btn = document.getElementById('logInBtn');
const slides = Object.freeze([
	{
		title: 'Hamburguesa Doble Cheddar',
		description: 'Compuesta por 360 gramos de carne en tres medallones con cheddar y bacon y sumergida en una pileta de queso cheddar',
		background: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/24180142/hamburguesa-Burgertify.jpg'
	},
	{
		title: 'Risotto',
		description:
			'Es uno de los platos de la cocina italiana más conocidos y apreciados internacionalmente. Se suele servir como primer plato, como alternativa a la pasta o a los platos de cuchara, pero no hay ningún inconveniente si quieres prepararlo como plato único para tu familia.',
		background: 'https://recetasparathermomix.com/wp-content/uploads/risottos-con-thermomix.jpg'
	},
	{
		title: 'Ensaladita con queso',
		description:
			'Dentro de los ingredientes de una ensalada, el queso casi siempre tiene un puesto de honor, las posibilidades son tantas, que nos ha costado seleccionar',
		background: 'https://eldiariony.com/wp-content/uploads/sites/2/2020/04/shutterstock_1564648540.jpg?quality=60&strip=all&w=1200'
	}
]);

document.addEventListener('DOMContentLoaded', function () {
	const raters = document.querySelectorAll('[role=rater]');
	raters.forEach(rater => {
		new Rater(rater);
	});
});

const slider = setSlider(slides, true);

const containerSlider = document.querySelector('#sliderContainer');
containerSlider.appendChild(slider);

//document.body.append(slider);

