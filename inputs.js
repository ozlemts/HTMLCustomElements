customElements.define('input-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		//console.log('limit = ' + limit);
		const LIMIT = this.getAttribute('limit');

		//create custom elements dom 
		this.innerHTML = 
			`
			<style> .char-counter {z-index: 1000; position : absolute; bottom: 4px; right: 4px; color: grey ; font-size: .8rem;}</style>
			<div class="container">
				<div class="input-group my-2">
					<input class="form-control" type="text" >
					<span class="char-counter"></span>
				</div>
			</div>
			`
		// create variables to modify 
		const INPUT = this.querySelector("input");
		const COUNTER = this.querySelector("span");

		//create custom elements properties
		this.input = this.querySelector("input");
		this.counter = this.querySelector("span");
		this.counter.innerText = LIMIT;

		const PLACEHOLDER = this.getAttribute('placeholder');
		this.input.setAttribute('placeholder',PLACEHOLDER);
	
		//set event listener to watch input size 
		this.input.addEventListener("input", e => {
			let value_lenght = e.target.value.length;
			set_counter(value_lenght);
		});

		function set_counter(lenght) {
			let remained_char = LIMIT - lenght;
			if (remained_char < 0) {
				COUNTER.innerText = 0;
				INPUT.value = INPUT.value.substring(0, LIMIT);
				remained_char = LIMIT - INPUT.value.length;
			}
			COUNTER.innerText = remained_char;
		}

	}

	// this method is invoked when value attribute is read
	get value()
	{	
		return this.querySelector("input").value;
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
		this.input.value = val;
		//this.input.addEventListener('oninput', e => console.log(e.target.value));
	}
});

