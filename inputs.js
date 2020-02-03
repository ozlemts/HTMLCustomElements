customElements.define('input-limited', class extends HTMLElement
{
	constructor() { super(); }
	
	// this method is invoked when component is ready
	connectedCallback()
	{
		console.log(this);
	}

	// this method is invoked when value attribute is read
	get value()
	{

		return this.getAttribute('value');
	}

	// this method is invoked when value attribute is written
	set value(val)
	{
	}
});
