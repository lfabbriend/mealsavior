const menuBtn = document.querySelector('.menu-btn');
	
menuBtn.addEventListener('click', ()=>{
	const desplegableMenu = document.querySelector('.desplegableMenu');
	if(desplegableMenu.classList.contains('show')){
		desplegableMenu.classList.remove('show');
		console.log("estoy quitando la clase");
	}else{
		desplegableMenu.classList.add('show');
		console.log("estoy agregando la clase");
	}});
