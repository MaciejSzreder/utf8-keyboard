class Editor{
	constructor(workspace, keyboard){
		workspace.onKeyUp(keyboard.keyUp);
		workspace.onKeyDown(keyboard.keyDown);
		keyboard.onChange(workspace.preview);
		keyboard.onInput(workspace.write);
	}
}