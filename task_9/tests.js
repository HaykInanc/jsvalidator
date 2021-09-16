const tests = [
	{
		name: 'Анатлий',
		lastname: 'Максимов',
		age: 32, 
		result: {
					name: 'Анатлий',
					lastname: 'Максимов',
					age: 32
				}
	},
	{
		name: 'Степан',
		lastname: 'Семенов',
		age: 28, 
		result: {
				name: 'Степан',
				lastname: 'Семенов',
				age: 28
			}
	},
	{
		name: 'Ольга',
		lastname: 'Петровна',
		age: 25, 
		result: {
				name: 'Ольга',
				lastname: 'Петровна',
				age: 25
			}
	},
	{
		name: 'Владимир',
		lastname: 'Сидоров',
		age: 43, 
		result: {
				name: 'Владимир',
				lastname: 'Сидоров',
				age: 43
			}
	}
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.name, elem.lastname, elem.age);
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
