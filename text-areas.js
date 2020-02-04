customElements.define('textarea-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		
		var limit = this.getAttribute('limit');
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
		this.textarea = this.querySelector("textarea");
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
