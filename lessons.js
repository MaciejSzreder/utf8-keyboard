class Lessons{
	characterSet='';

	constructor(characterSet){
		this.characterSet = characterSet;
	}

	*[Symbol.iterator]() {
		let level = 1;
		for(;;++level){
			yield ()=>this.createText(this.characterSet.slice(0,level));
		}
	}

	createText(characterSet){
		characterSet = [...characterSet];
		for(let i=characterSet.length-1; i>0; --i){
			let rand = Math.floor(Math.random()*(i+1));
			[characterSet[rand],characterSet[i]]=[characterSet[i],characterSet[rand]];
		}
		return characterSet.join('');
	}
}