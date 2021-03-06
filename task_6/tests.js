const tests = [
	{a:'5px', b:'7px', c:'4px',  result: 140 },
	{a:'8px', b:'3px', c:'1px',  result: 24 },
	{a:'1m',  b:'1m',  c:'1m',  result: 1 },
	{a:'6.13px', b:'4.32px', c:'6.7px',  result: 177.42672000000002 },
		
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.a, elem.b, elem.c);
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
