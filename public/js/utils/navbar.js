const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', ()=>{
	const desplegableMenu = document.querySelector('.desplegableMenu');
	if(desplegableMenu.classList.contains('show')){
		desplegableMenu.classList.remove('show');
	}else{
		desplegableMenu.classList.add('show');
	}});

