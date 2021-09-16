const tests = [
	{price: 15000,    range: 'month',		result: '15000 Р в месяц'},
	{price: 15000,      range: 'day', 	result: '15000 Р в день'},
	{price: 15000,     range: 'year', 	result: '15000 Р в год'}

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
