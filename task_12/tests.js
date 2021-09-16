const tests = [
	{price: 'двадцать рублей', 		result: 'Не число'},
	{price: '-12 слонов и пол зайца', 	result: 'Число не корректное'},
	{price: '65 евро', 		result: 65},
	{price: '432' , 		result: 432}
	
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.price);
		if (''+permanentResultVariable === ''+elem.result){
			answer.classList.add('pos');
		}else{
			answer.classList.add('neg');
		}

		answer.innerHTML = Object.entries(elem).map(([key, value])=>`${key} = ${''+value}`).join(' ');
		document.querySelector('#testResult').appendChild(answer);
	})
}

btn.addEventListener('click', testHandler);
