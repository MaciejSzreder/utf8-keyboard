let trainSpace = new TrainSpace(
	new Workspace(document.getElementById`workspace`),
	new Target(document.getElementById`target`)
)
let keyboard = new Keyboard();
let characterSet = document.getElementById`char-set`.value;

let train = new Train(trainSpace, keyboard)

train.setLessons(new Lessons(characterSet));
train.onComplete(train.next)