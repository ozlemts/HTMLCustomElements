
class InputLimited extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log(this);
		const limit = this.getAttribute('limit');
		console.log('limit = ' + limit);
		const id = this.getAttribute('id');
		console.log('id = ' + id);
		
		this.input = document.createElement('input');
		this.input.setAttribute('class','form-control');
		this.input.setAttribute('placeholder','e-mail');
		this.input.value = 'Default Value';

		//input char count 
		console.log('inside connectedCallback val: ' + this.input.value.length);

		var char_counter = document.createElement('span');
		char_counter.setAttribute('class','char-counter');
		char_counter.setAttribute('limit', limit);

		var style = document.createElement('style');
		style.textContent = `.form-control { color: green }`;

		this.appendChild(this.input);
		this.appendChild(char_counter);
		this.appendChild(style);
		console.log("all " + this.innerHTML);
	}

	// this method is invoked when value attribute is read
	get value()
	{
		console.log('inside getter: ' + this.input);
		return this.input.value;
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
		console.log('inside setter: ' + this.input);
		this.input.value = val;
	}
}


console.log('defining input-limited');
customElements.define('input-limited', InputLimited);
