import { baseApiUrl } from './utils/constants.js';

const form = document.getElementById('loginForm');
const guestOptionBtn = document.getElementById('guestOptionBtn');
const userOptionBtn = document.getElementById('userOptionBtn');
localStorage.setItem('token', undefined);
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
			.then(json => {
				localStorage.setItem('token', json[0]);
				location.href = '../index.html';
			}) //validate that is a tokem, not an error
			.catch(error => {
				console.warn(error);
			});
	});
});

guestOptionBtn.addEventListener('click', () => {
	localStorage.setItem('token', undefined);
	location.href = '../index.html';
});
