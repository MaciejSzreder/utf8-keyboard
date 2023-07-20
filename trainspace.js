class TrainSpace{
	workspace = null;
	target = null;
	#completeAction = null;
	#mistakeAction = null;

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
			let text = this.workspace.text;
			let target = this.target.get();
			if(text == target){
				this.#completeAction();
			}

			let position = text.length-1;
			let entered = text[position];
			let expected = target[position];
			if(entered != expected){
				this.#mistakeAction(expected,entered);
			}
		});
	}

	onComplete(action){
		this.#completeAction = action;
	}

	onMistake(action){
		this.#mistakeAction = action;
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