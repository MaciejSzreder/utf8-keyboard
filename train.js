class Train extends Editor{
	constructor(trainSpace, keyboard){
		super(trainSpace,keyboard);
	}

	setTarget(target){
		this.workspace.target.set(target);
	}
}