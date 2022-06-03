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
});
