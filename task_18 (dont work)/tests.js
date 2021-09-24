const tests = [
	{numb: 25,    result: 600},
	{numb: 10,    result: 90},
	{numb: 5,    	result: 20},
	{numb: 15,    result: 115}
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.price, elem.range);
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
