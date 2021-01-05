//alert("I am learning JavaScript");

function Addup() {
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var add = FirstNum + SecondNum;
	document.Calculator.txtoutput.value = add;
}

function Subtract() {
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var subtract = FirstNum - SecondNum;
	document.Calculator.txtoutput.value = subtract;
}

function Multiply() {
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var multiply = FirstNum * SecondNum;
	document.Calculator.txtoutput.value = multiply;
}

function Divide() {
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var divide = FirstNum / SecondNum;
	document.Calculator.txtoutput.value = divide;
}