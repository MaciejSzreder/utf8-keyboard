class Keyboard{
	text='';
	key_map = 0;
	key_dir = {};
	value_dir = {};
	firstUp = false;

	#inputAction = ()=>{};
	#changeAction = ()=>{};

	constructor(key_dir = null){
		this.key_dir = key_dir ?? {
			a: 128,
			s:  64,
			d:  32,
			f:  16,
			j:   8,
			k:   4,
			l:   2,
			';': 1,
		};
		for(let [key, value] of Object.entries(this.key_dir)){
			this.value_dir[value] = key;
		}
	}

	keyDown=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			this.key_map|=this.key_dir[e.key];
			this.#changeAction(this.key_map);
			this.firstUp = true;
		}
	}
	
	keyUp=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			if(this.firstUp){
				this.firstUp = false;
				this.#inputAction(this.key_map);
			}
			this.key_map&=~this.key_dir[e.key];
			this.#changeAction(this.key_map);
		}
	}

	decode(char){
		if(typeof char === 'string'){
			char = char.charCodeAt(0);
		}
		let keys = [];
		for(let i=1; i<=char; i<<=1){
			let v = i&char;
			if(v){
				keys.push(this.value_dir[v]);
			}
		}
		return keys;
	}

	onInput(action){
		this.#inputAction = action;
	}

	onChange(action){
		this.#changeAction = action;
	}
}