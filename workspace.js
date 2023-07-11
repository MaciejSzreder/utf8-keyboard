class Workspace{
	textarea = null;
	text = '';

	constructor(textarea){
		this.textarea = textarea;
	}

	preview=(char)=>{
		this.textarea.value = this.text+char;
	}

	write=(char)=>{
		this.text += char;
		this.textarea.value = this.text;
	}

	onKeyDown(action){
		this.textarea.addEventListener('keydown',action)
	}

	onKeyUp(action){
		this.textarea.addEventListener('keyup',action)
	}
}