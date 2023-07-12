class Train extends Editor{

	constructor(trainSpace, keyboard){
		super(trainSpace,keyboard);
	}

	setTarget(target){
		this.workspace.clear();
		this.workspace.target.set(target);
	}

	onComplete(action){
		this.workspace.onComplete(action);
	}

	next(){
		this.setTarget('bcd');
	}
}