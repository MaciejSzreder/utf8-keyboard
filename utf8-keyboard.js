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
	textarea = null;

	constructor(textarea){
		this.textarea = textarea;
		textarea.addEventListener('keyup',this.keyUp);
		textarea.addEventListener('keydown',this.keyDown);
	}

	preview(char){
		textarea.value = this.text+char;
	}

	write(char){
		this.text += char;
		textarea.value = this.text;
	}

	keyDown=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			this.key_map|=this.key_dir[e.key];
			this.preview(String.fromCharCode(this.key_map));
			this.firstUp = true
		}
	}
	
	keyUp=(e)=>{
		e.preventDefault();
		if(!e.repeat){
			if(this.firstUp){
				this.firstUp = false;
				this.write(String.fromCharCode(this.key_map));
			}
			this.key_map&=~this.key_dir[e.key];
			this.preview(String.fromCharCode(this.key_map));
		}
	}
}