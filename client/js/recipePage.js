const button = document.querySelector('.nutritionButton')
const facts = document.querySelector('#nutritionFacts')

button.addEventListener('click', () => {
    facts.classList.toggle('visible')
});