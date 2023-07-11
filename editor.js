class Editor{
	workspace = null;
	
	constructor(workspace, keyboard){
		this.workspace = workspace;

		workspace.onKeyUp(keyboard.keyUp);
		workspace.onKeyDown(keyboard.keyDown);
		keyboard.onChange(workspace.preview);
		keyboard.onInput(workspace.write);
	}
}