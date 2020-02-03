

customElements.define('input-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		console.log(this);
		const limit = this.getAttribute('limit');
		console.log('limit = ' + limit);
		const id = this.getAttribute('id');
		console.log('id = ' + id);
		
		var input = document.createElement('input');
		input.setAttribute('class','form-control');
		input.setAttribute('placeholder','e-mail');
		input.value = 'Default Value';

		//input char count 
		console.log(input.value.length);

		var char_counter = document.createElement('span');
		char_counter.setAttribute('class','char-counter');
		char_counter.setAttribute('limit', '100');

		var style = document.createElement('style');
		style.textContent = `.form-control { color: green}`;

		this.appendChild(input);
		this.appendChild(char_counter);
		this.appendChild(style);
		console.log("all " + this.innerHTML)
	}


	// this method is invoked when value attribute is read
	get value()
	{
		
		return this.getAttribute('value');
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
		this.setAttribute('value', this.input.value);
	}
});
