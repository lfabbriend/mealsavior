import { baseApiUrl } from './utils/constants.js';

const form = document.getElementById('loginForm');

form.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const userName = formData.get('userName');
	const email = formData.get('email');
	const password = formData.get('password');
	fetch(`${baseApiUrl}/login`, {
		method: 'GET',
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
});
