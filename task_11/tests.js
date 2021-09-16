const tests = [
	{speed: 30 , 		result: 'вы едете слишком медленно'},
	{speed: 10, 		result: 'вы едете слишком медленно'},
	{speed: 65 , 		result: 'вы едете с нормальной скоростью'},
	{speed: 120 , 		result: 'вы едите слишком быстро, сбавьте скорость'}
	
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.speed);
		if (permanentResultVariable===elem.result){
			answer.classList.add('pos');
		}else{
			answer.classList.add('neg');
		}

		answer.innerHTML = Object.entries(elem).map(([key, value])=>`${key} = ${JSON.stringify(value)}`).join(' ');
		document.querySelector('#testResult').appendChild(answer);
	})
}

btn.addEventListener('click', testHandler);
