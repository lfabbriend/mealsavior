import { baseApiUrl } from './utils/constants.js';

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
