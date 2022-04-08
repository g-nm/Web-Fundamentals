const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const calculator = document.querySelector('.calculator');
function buttonclicked(e) {
	const key = e.target;
	const keyValue = key.textContent;
	const displayValue = display.value;
	const { type } = key.dataset;
	const { previousKey, operator, firstnumber } = calculator.dataset;

	if (type === 'number') {
		if (previousKey === 'operator' || previousKey === 'equals') {
			display.value = keyValue;
		} else {
			display.value += keyValue;
		}
	}

	if (type === 'operator') {
		// store the current display value
		calculator.dataset.firstnumber = displayValue;
		calculator.dataset.operator = key.dataset.key;
		const operators = calculator.querySelectorAll('[data-type=operator]');
		operators.forEach((element) => (element.dataset.state = ''));
		key.dataset.state = 'selected';
		display.value = display.defaultValue;
		// add the operator to the store
	}
	if (type === 'equals') {
		let result = 0;
		const secondValue = displayValue ? parseInt(displayValue) : 0;
		if (operator === 'times') result = parseInt(firstnumber) * secondValue;
		if (operator === 'divide') result = parseInt(firstnumber) / secondValue;
		if (operator === 'add') result = parseInt(firstnumber) + secondValue;
		if (operator === 'minus') result = parseInt(firstnumber) - secondValue;

		display.value = result;
		const selectedOperator = calculator.querySelector(
			'[data-state=selected]'
		);
		selectedOperator.dataset.state = '';
	}
	if (type === 'function') {
		if (keyValue === 'AC') {
			display.value = display.defaultValue;
		}
		if (keyValue === 'DEL') {
			display.value = displayValue.slice(0, -1);
		}
	}

	calculator.dataset.previousKey = type;
}
buttons.forEach((button) => {
	button.addEventListener('click', buttonclicked);
});
