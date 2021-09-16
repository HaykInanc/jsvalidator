const regexpStyle = /^[^{@]+{[^}]+}/gm;
const js  = document.querySelector('#js');
let btn  = document.querySelector('#submit');
let runBtn = document.querySelector('#run');
const log = document.querySelector('#log');
const result = document.querySelector('#forResult');
let mainFunc = ()=>{};
let permanentResultVariable = undefined;

js.value = `
console.log(a + b);
`;

let preScript = ()=>{
	console['log']=writeToLog;
};

let postScript = ()=>{
};

let writeToLog = (text)=>{
	const pElem = document.createElement('p');
	pElem.innerText = JSON.stringify(text);
	permanentResultVariable = text;
	log.appendChild(pElem);
}
let writeToResult = (text)=>{
	result.innerText = '';
	const pElem = document.createElement('p');
	pElem.innerText = JSON.stringify(text);
	result.appendChild(pElem);
}


const inputHandler = ()=>{
	preScript();
	try{
		log.innerText = '';
		eval(`
			mainFunc = (name, lastname, age)=>{
				${js.value}
			};
		`);
		mainFunc('Анатлий','Максимов', 32);
		writeToResult(permanentResultVariable);
	}catch(e){
		writeToLog(e.name + ': ' + e.message);
	}
	postScript();

};



runBtn.addEventListener('click', inputHandler);