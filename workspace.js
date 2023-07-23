class Workspace{
	textarea = null;
	text = new Utf8;

	constructor(textarea){
		this.textarea = textarea;
	}

	preview=(char)=>{
		this.textarea.value = this.text.copy().putUtf8(char);
	}

	write=(char)=>{
		this.textarea.value = this.text.putUtf8(char);
	}

	onKeyDown(action){
		this.textarea.addEventListener('keydown',action)
	}

	onKeyUp(action){
		this.textarea.addEventListener('keyup',action)
	}

	clear(){
		this.text = new Utf8;
		this.textarea.value = '';
	}
}