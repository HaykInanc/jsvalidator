const tests = [
	{a: 1, b:12 , c:42 , result: 42},
	{a: 14, b:5 , c:-8 , result: 14},
	{a: 72, b:0 , c:4 , result: 72},
	{a: -1000002, b:-1000001 , c:-1000000 , result: -1000000}
	
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.a, elem.b, elem.c);
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
