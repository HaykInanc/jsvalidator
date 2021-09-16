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
	Math['max'] = ()=>console.log('Хорошая попытка =) Но нет!');
};

let postScript = ()=>{
};

let writeToLog = (text)=>{
	const pElem = document.createElement('p');
	pElem.innerText = text;
	permanentResultVariable = text;
	log.appendChild(pElem);
}
let writeToResult = (text)=>{
	result.innerText = '';
	const pElem = document.createElement('p');
	pElem.innerText = text;
	result.appendChild(pElem);
}


const inputHandler = ()=>{
	preScript();
	try{
		log.innerText = '';
		eval(`
			mainFunc = (a, b, c)=>{
				${js.value}
			};
		`);
		mainFunc(32, 5, 14);
		writeToResult(permanentResultVariable);
	}catch(e){
		writeToLog(e.name + ': ' + e.message);
	}
	postScript();

};



runBtn.addEventListener('click', inputHandler);