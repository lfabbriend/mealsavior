import { baseApiUrl } from '/js/utils/constants.js';
import '/components/slider.js';


// estos dos son para sacar el navbar y el footer del login, la manera correcta es hacerlo con las condiciones de los handlebars
const navbar = document.querySelector('.navigation');
navbar.style.display = 'none';

const footer = document.querySelector('.footerBody');
footer.style.display = 'none';

const form = document.getElementById('signUpForm');

form.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const userName = formData.get('userName');
	const email = formData.get('email');
	const password = formData.get('password');
	
	if(email){
		fetch(`${baseApiUrl}/signup`, {
			//acá iría una ruta singup a la API
			method: 'POST',
			body: JSON.stringify({
				userName,
				email,
				password
			}),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(error => console.warn(error));
	}else{
		alert("please fill out the field email");
	}

/* 	//#region Slider
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
//#endregion */


	/*el siguiente bloque no es necesario fue reemplazado adentro del if para que valide el email que es el unico campo que no puede ser validado x el html*/ 

	/* fetch(`${baseApiUrl}/signup`, {
		//acá iría una ruta singup a la API
		method: 'POST',
		body: JSON.stringify({
			userName,
			email,
			password
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.warn(error)); */
});
