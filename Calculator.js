let screen = document.getElementById('screen');

function appendNumber(number) {
	screen.value += number;
}

function appendOperator(operator) {
	screen.value += operator;
}

function appendDecimal() {
	screen.value += ".";
}

function calculate() {
	screen.value = eval(screen.value);
}

