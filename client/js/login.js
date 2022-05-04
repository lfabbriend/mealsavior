import { baseApiUrl } from './utils/constants.js';

const form = document.getElementById('loginForm');

form.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const userName = formData.get('userName');
	const password = formData.get('password');
	fetch(`${baseApiUrl}/singin`, {
		method: 'POST',
		body: JSON.stringify({
			userName,
			password
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(json => localStorage.setItem('token', json[0])) //validate that is a tokem, not an error
		.catch(error => console.warn(error));
});
