import { baseApiUrl } from './utils/constants.js';
import { setLoginToken, removeLoginToken } from './utils/helpers.js';
import { setSlider } from '../components/slider.js';

//#region Login
removeLoginToken();

const form = document.getElementById('loginForm');
const guestOptionBtn = document.getElementById('guestOptionBtn');
const userOptionBtn = document.getElementById('userOptionBtn');
const userInput = (document.getElementById('userInput').style.display = 'none');

userOptionBtn.addEventListener('click', () => {
	document.getElementById('userInput').style.display = 'block'; //it only appears when page is reloaded

	form.addEventListener('submit', event => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const userName = formData.get('userName');
		const password = formData.get('password');

		fetch(`${baseApiUrl}/login`, {
			method: 'POST',
			body: JSON.stringify({ userName, password }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(token => {
				if (!token.length) throw new Error('Invalid user or password');

				setLoginToken(token);
				location.href = '/';
			})
			.catch(error => alert(error));
	});
});
//#endregion

//#region Slider
const containerSlider = document.querySelector('#sliderContainer');
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

const slider = setSlider(slides, true);
containerSlider.appendChild(slider);
//#endregion

guestOptionBtn.addEventListener('click', () => {
	localStorage.removeItem('token');
	//localStorage.setItem('token', undefined);//aca hay que removerlo
	location.href = '../index.html';
});
