const tests = [
	{value: 12 , result: 'number'},
	{value: 'number' , result: 'string'},
	{value: null , result: 'object'},
	{value: true , result: 'boolean'}
	
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.value);
		if (JSON.stringify(permanentResultVariable)===JSON.stringify(elem.result)){
			answer.classList.add('pos');
		}else{
			answer.classList.add('neg');
		}

		answer.innerHTML = Object.entries(elem).map(([key, value])=>`${key} = ${JSON.stringify(value)}`).join(' ');
		document.querySelector('#testResult').appendChild(answer);
	})
}

btn.addEventListener('click', testHandler);
