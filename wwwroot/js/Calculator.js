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

/*
< !doctype html >
	<html>
		<head>
			<title>Calculator</title>
			<script type="text/javascript">

				function Addup(){
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var add = FirstNum + SecondNum;
	document.Calculator.txtoutput.value = add ;
	}

	function Subtract(){
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var subtract = FirstNum - SecondNum;
	document.Calculator.txtoutput.value = subtract ;
	}

	function Multiply(){
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var multiply = FirstNum * SecondNum;
	document.Calculator.txtoutput.value = multiply ;
	}

	function Divide(){
	var FirstNum = parseFloat(document.Calculator.txtFirst.value);
	var SecondNum = parseFloat(document.Calculator.txtSecond.value);
	var divide = FirstNum / SecondNum;
	document.Calculator.txtoutput.value = divide ;
	}
</script>
		</head>

		<body>
			<form name="Calculator" >
				Enter first input <input type="text" name="txtFirst"> <br>
					Enter second input <input type "text" name="txtSecond"> <br>
						<input type="button" name="outputButton" value="Add" onclick="Addup();">
							<input type="button" name="subtract" value="Subtract" onclick="Subtract();">
								<input type="button" name="multiply" value="Multiply" onclick="Multiply();">
									<input type="button" name="divide" value="Divide" onclick="Divide();">
										Output <input type "text" name="txtoutput" readonly> <br>
	
</form>
</body>

</html>
*/