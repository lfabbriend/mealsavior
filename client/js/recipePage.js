const nutritionButton = document.querySelector('#nutritionButton');
const nutritionFacts = document.querySelector('#nutritionFacts');

nutritionButton.addEventListener('click', () => {
    nutritionFacts.classList.toggle("nutritionFacts2");
})