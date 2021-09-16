const tests = [
	{word_1: 'велосипед', word_2: 'скейт', 		result: 'велосипед'},
	{word_1: 'дирижабль', word_2: 'люберцы', 	result: 'дирижабль'},
	{word_1: 'школа',     word_2: 'стоимость', 	result: 'стоимость'}
	
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.word_1, elem.word_2);
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
