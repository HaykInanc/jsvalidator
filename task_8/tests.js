const tests = [
	{obj:  {
			name: 'Анатлий',
			lastname: 'Максимов',
			age: 32
		}, result: `Имя: "Анатлий" Фамилия: 'Максимов' Возраст: 32`},
	{obj:  {
			name: 'Степан',
			lastname: 'Семенов',
			age: 28
		}, result: `Имя: "Степан" Фамилия: 'Семенов' Возраст: 28`},
	{obj:  {
			name: 'Ольга',
			lastname: 'Петровна',
			age: 25
		}, result: `Имя: "Ольга" Фамилия: 'Петровна' Возраст: 25`},
	{obj:  {
			name: 'Владимир',
			lastname: 'Сидоров',
			age: 43
		}, result: `Имя: "Владимир" Фамилия: 'Сидоров' Возраст: 43`}
	
];

const testHandler = ()=>{
	document.querySelector('#testResult').innerText = '';
	tests.forEach(elem=>{
		log.innerText = '';
		const answer = document.createElement('li');
		mainFunc(elem.obj);
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
