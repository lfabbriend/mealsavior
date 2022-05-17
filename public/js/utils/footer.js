const bichito = document.querySelector('.bichito');
const footer = document.querySelector('.footerBody');

bichito.addEventListener('click', () => {
	footer.classList.toggle('visible');
});