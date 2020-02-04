customElements.define('textarea-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		//get attributes from custom elements
		const LIMIT = this.getAttribute('limit');
		
		//create custom elements dom 
		this.innerHTML = 
		`
		<style> .char-counter {position : absolute; bottom: 4px; right: 4px; color: grey ; font-size: .8rem;}</style>
		<div class="container">
			<div class="input-group my-2">
				<textarea class="form control w-100" placeholder= "limited text area" rows="3" ></textarea>
				<span class="char-counter"></span>
			</div>
		</div>
		`
		// create variables to modify 
		const TEXTAREA = this.querySelector("textarea");
		const COUNTER = this.querySelector("span");

		//create custom elements properties
		this.textarea = this.querySelector("textarea");
		this.counter = this.querySelector("span");
		this.counter.innerText = LIMIT;
		
		//set event listener to watch input size 
		this.textarea.addEventListener("input", e => {
			let value_lenght = e.target.value.length;
			set_counter(value_lenght);
		})

		function set_counter(lenght) {
			let remained_char = LIMIT - lenght;
			if (remained_char < 0) {
				COUNTER.innerText = 0;
				TEXTAREA.value = TEXTAREA.value.substring(0, LIMIT);
				remained_char = LIMIT - TEXTAREA.value.length;
			}
			COUNTER.innerText = remained_char;
		}
	}

	// this method is invoked when value attribute is read
	get value()
	{
		//console.log('inside getter: ' + this.innerHTML)
		return this.querySelector("textarea").value;
		
	}

	// this method is invoked when value attribute is written
	set value(val)
	{	this.textarea.value = val;

	}
});
