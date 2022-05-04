const nutritionButton = document.querySelector('.nutritionButton');
const nutritionFacts = document.querySelector('#nutritionFacts');

nutritionButton.addEventListener('click', () => {
	nutritionFacts.classList.toggle('visible');
});

const bichito = document.querySelector('.bichito');
const footer = document.querySelector('.footerBody');

bichito.addEventListener('click', () => {
	footer.classList.toggle('visible');
});
