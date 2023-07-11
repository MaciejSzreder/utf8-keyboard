class TrainSpace{
	workspace = null;
	target = null;

	constructor(workspace, target){
		this.workspace = workspace;
		this.target = target;
	}

	onKeyDown(action){
		this.workspace.onKeyDown(action);
	}
	
	onKeyUp(action){
		this.workspace.onKeyUp(action);
	}
	
	write=(char)=>{
		this.workspace.write(char);
	}

	preview=(char)=>{
		this.workspace.preview(char);
	}

	target(target){
		this.target.set(target);
	}
}