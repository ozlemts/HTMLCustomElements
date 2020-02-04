customElements.define('textarea-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{

		
		this.innerHTML = 
		`
		<style> .span {color: red }</style>
		<div>
			<div class="input-group">
				<textarea class="form control" placeholder= "limited text area"></textarea>
				<span class="char-counter" limit=50></span>
			</div>
		</div>
		`
		//console.log("all 2" + this.querySelector("textarea").value);
		const TEXTAREA = this.querySelector("textarea");
		const COUNTER = this.querySelector("span");
		const LIMIT = this.getAttribute('limit');
		TEXTAREA.addEventListener("input", e => {
			let remained_char = LIMIT - e.target.value.length
			disable(remained_char);
			COUNTER.innerText = LIMIT - e.target.value.length;
		})

		function disable(lenght) {
			if (lenght <= 0) {
				TEXTAREA.setAttribute('disabled', 'true');
				console.log(TEXTAREA);
			}
			else {
				TEXTAREA.setAttribute('disabled', 'false');
				console.log(TEXTAREA);
			}
		}
	}

	// this method is invoked when value attribute is read
	get value()
	{
		//console.log('inside getter: ' + this.innerHTML)
		return this.textarea.value;
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
		this.textarea.value = val;
	}
});
