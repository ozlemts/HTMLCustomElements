customElements.define('input-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		//console.log(this);

		//console.log('limit = ' + limit);
		const LIMIT = this.getAttribute('limit');

		//create input tag 
		this.input = document.createElement('input');
		this.input.setAttribute('class','form-control');
		this.input.setAttribute('type','text');
		this.input.setAttribute('placeholder','e-mail');
		this.input.value = 'Default Value';
	

		var char_counter = document.createElement('span');
		char_counter.setAttribute('class','char-counter');
		char_counter.setAttribute('limit', LIMIT);

		var style = document.createElement('style');
		style.textContent = `.form-control { color: green }`;

		this.appendChild(this.input);
		this.appendChild(char_counter);
		this.appendChild(style);

		
		this.querySelector("span").innerText = LIMIT;

		this.querySelector("input").addEventListener("input", 
			e => {
				console.log(e.target.value.length);
				console.log(this);
				this.querySelector("span").innerText = (LIMIT - e.target.value.length);
				console.log(this.querySelector("span").innerText);
			}
		)
		//this.input.count = this.input.value.length;
		console.log(this);

	}

	// this method is invoked when value attribute is read
	get value()
	{	
		return this.input.value;
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
		this.input.value = val;
		//this.input.addEventListener('oninput', e => console.log(e.target.value));
	}
});

