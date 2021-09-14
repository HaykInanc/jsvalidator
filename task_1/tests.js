const tests = [
	{a: 12, b:15, result: 27},
	{a: 22, b:25, result: 47},
	{a: 32, b:35, result: 67},
	{a: 42, b:45, result: 87}
]

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.a, elem.b);
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
