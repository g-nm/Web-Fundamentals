const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const selectelement = document.querySelector('.select_element');
const elements = [...inputs, select];
const change_event = new Event('resetselect', { bubbles: true });
const checkvalidity = (e) => {
	const validity = e.validity.valid;
	const alertelementid = e.getAttribute('aria-describedby');
	const message = e.validationMessage;
	const alertelement = alertelementid
		? document.getElementById(alertelementid)
		: null;

	if (message && alertelement && !validity) {
		alertelement.textContent = message;
		return;
	} else {
		alertelement.textContent = '';
		return;
	}
};
function selectchange(e) {
	if (e.type !== 'change') {
		selectelement.textContent = 'Not specified';
		return;
	}
	if (!e.target.value) {
		selectelement.textContent = 'Not specified';
		return;
	} else {
		const value = `${e.target.value
			.charAt(0)
			.toUpperCase()}${e.target.value.slice(1)}`;
		selectelement.textContent = value;
	}
}

select.addEventListener('resetselect', selectchange, false);
select.addEventListener('change', selectchange);
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const invalids = form.querySelectorAll(':invalid');
	// invalids.forEach((e) => checkvalidity(e));
	if (e.target.checkValidity()) {
		const form_data = new FormData(form);
		!form_data.get('insure_object') &&
			form_data.append('insure_object', null);

		for (const [key, value] of form_data) {
			console.log(key + ':' + value);
		}
	}
});
form.addEventListener('reset', () => select.dispatchEvent(change_event));

elements.forEach((element) => {
	element.addEventListener('input', (e) => checkvalidity(e.target));
	element.addEventListener('invalid', (e) => checkvalidity(e.target));
});
