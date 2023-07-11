class Keyboard{
	text='';
	key_map = 0;
	key_dir = {
		a: 128,
		s:  64,
		d:  32,
		f:  16,
		j:   8,
		k:   4,
		l:   2,
		';': 1,
	};
	firstUp = false;

	#inputAction = ()=>{};
	#changeAction = ()=>{};

	keyDown=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			this.key_map|=this.key_dir[e.key];
			this.#changeAction(String.fromCharCode(this.key_map));
			this.firstUp = true
		}
	}
	
	keyUp=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			if(this.firstUp){
				this.firstUp = false;
				this.#inputAction(String.fromCharCode(this.key_map));
			}
			this.key_map&=~this.key_dir[e.key];
			this.#changeAction(String.fromCharCode(this.key_map));
		}
	}

	onInput(action){
		this.#inputAction = action;
	}

	onChange(action){
		this.#changeAction = action;
	}
}