let trainSpace = new TrainSpace(
	new Workspace(document.getElementById`workspace`),
	new Target(document.getElementById`target`)
)
let keyboard = new Keyboard();

let train = new Train(trainSpace, keyboard)

train.setTarget('abc');