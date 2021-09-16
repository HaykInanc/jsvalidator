const tests = [
	{a:  5.4, result: 4},
	{a: 7.6, result: 4},
	{a: 11.3,  result: 5},
	{a: 23.9,  result: 8},
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.a);
		if (permanentResultVariable === elem.result){
			answer.classList.add('pos');
		}else{
			answer.classList.add('neg');
		}

		answer.innerHTML = Object.entries(elem).map(([key, value])=>`${key} = ${value}`).join(' ');
		document.querySelector('#testResult').appendChild(answer);
	})
}

btn.addEventListener('click', testHandler);
