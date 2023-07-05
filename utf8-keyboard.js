{

let textarea = document.getElementById`textarea`;
let key_map = 0;
let key_dir = {
	a: 128,
	s:  64,
	d:  32,
	f:  16,
	j:   8,
	k:   4,
	l:   2,
	';': 1,
};

let text='';
function preview(char){
	textarea.value = text+char;
}
function write(char){
	text += char;
	textarea.value = text;
}

let firstUp = false;
function keyDown(e){
	e.preventDefault();
	key_map|=key_dir[e.key];
	preview(String.fromCharCode(key_map));
	firstUp = true
}
function keyUp(e){
	e.preventDefault();
	if(firstUp){
		firstUp = false;
		write(String.fromCharCode(key_map));
	}
	key_map&=~key_dir[e.key];
	preview(String.fromCharCode(key_map));
}

}