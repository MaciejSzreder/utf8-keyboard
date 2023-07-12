class TrainSpace{
	workspace = null;
	target = null;
	#completeAction = null;

	constructor(workspace, target){
		this.workspace = workspace;
		this.target = target;
	}

	onKeyDown(action){
		this.workspace.onKeyDown(action);
	}
	
	onKeyUp(action){
		this.workspace.onKeyUp((e)=>{
			action(e);
			if(this.workspace.text==this.target.get()){
				this.#completeAction();
			}
		});
	}

	onComplete(action){
		this.#completeAction = action;
	}
	
	write=(char)=>{
		this.workspace.write(char);
	}

	preview=(char)=>{
		this.workspace.preview(char);
	}

	target(target){
		this.target.target(target);
	}

	clear(){
		this.workspace.clear();
	}
}