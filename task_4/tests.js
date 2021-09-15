const tests = [
	{name: '   Анатолий', lastname: '  Сидоров', result: 15},
	{name: 'Семен', lastname: '\nСеменов', result: 12},
	{name: 'Светлана\t', lastname: 'Олеговна', result: 16},
	{name: 'Максим', lastname: ' Петров', result: 12},
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.name, elem.lastname);
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
