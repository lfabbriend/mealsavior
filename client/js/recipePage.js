const nutritionButton = document.querySelector('.nutritionButton');
const nutritionFacts = document.querySelector('#nutritionFacts');
const doneBtn = document.querySelector('.doneButton');
const doneBtnContainer = document.querySelector('.doneButtonContainer');

nutritionButton.addEventListener('click', () => {
	nutritionFacts.classList.toggle('visible');
});

doneBtn.addEventListener('click', ()=>{
	if(doneBtnContainer.hasAttribute('selected')){
		doneBtnContainer.removeAttribute('selected');
		doneBtn.classList.remove('selected');
		doneBtn.textContent = 'Mark this recipe as done';
	}else{
		doneBtnContainer.setAttribute('selected', true);
		doneBtn.classList.add('selected');
		doneBtn.textContent = 'Done';
		//aca habria que poner una funcion que envie la data a la api
	}
	
});