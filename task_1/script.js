const regexpStyle = /^[^{@]+{[^}]+}/gm;
const js  = document.querySelector('#js');
let btn  = document.querySelector('#submit');
let runBtn = document.querySelector('#run');
const log = document.querySelector('#log');
const result = document.querySelector('#forResult');
let mainFunc;
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
	log.innerText = '';
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

const runJS = (a, b)=>{
	preScript();
	try{
		mainFunc(a, b);
		writeToResult(permanentResultVariable);
	}catch(e){
		writeToLog(e.name + ': ' + e.message);
	}
	postScript();
}

const inputHandler = ()=>{
	eval(`
		function main(a, b){
			${js.value}
		};
	`);
	mainFunc = main;
	runJS(15, 43)
};



runBtn.addEventListener('click', inputHandler);