document.querySelector(".buttons").onclick=function(event) {
	let target=event.target;
	let input=document.querySelector("#exp");
	let operation=["/","+","-","*","."];

	if (target.classList.contains("number")) {
		let value=input.value;
		if (input.value==0) {
			input.value=target.innerHTML;
		}
		else{
			input.value=input.value+target.innerHTML;
		}
	}
	else if(target.classList.contains("operation")){
		let value=target.innerHTML;
		let ivalue=input.value;
		let lastchar=ivalue[ivalue.length-1];
		if (operation.indexOf(lastchar)!=-1) {
			ivalue=ivalue.replace(/.$/,value);
			input.value=ivalue;
		}
		else{
			input.value=input.value+value;
		}
		
		
	}
	else if(target.classList.contains("calculation")){
		let result=eval(input.value);
		input.value=result;
	}
	else if(target.classList.contains("clear")){
		input.value=0;
	}
	else if(target.classList.contains("clear-one")){
		let value=input.value;
		if (value=="") {
			input.value=0;
		}
		else{
		value=value.substring(0,value.length-1);
		if(value==""){
			input.value=0;
		}
		else{
			input.value=value;
		}
		}

	}
}