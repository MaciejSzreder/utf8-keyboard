class Target{
	constructor(target){
		this.target = target;
	}

	set(target){
		this.target.textContent = target;
	}

	get(){
		return this.target.textContent;
	}
}