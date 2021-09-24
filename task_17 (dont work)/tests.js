const tests = [
	{temp: 25,    weather: 'clear',				activity: 'golf'/*,   result: 'golf'*/},
	{temp: 10,    weather: 'clear', 			activity: 'hikking'/*, result: 'hikking'*/},
	{temp: 5,    	weather: 'not clear', 	activity: 'bowling'/*, result: 'bowling'*/},
	{temp: 15,    weather: 'not clear', 	activity: 'hikking'/*, result: 'hikking'*/}
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
