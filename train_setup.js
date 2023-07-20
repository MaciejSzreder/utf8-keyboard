let trainSpace = new TrainSpace(
	new Workspace(document.getElementById`workspace`),
	new Target(document.getElementById`target`)
)
let hint = new Hint(document.getElementById`hint`);
let characterSet = document.getElementById`char-set`.value;

let keyboard = new Keyboard();

let train = new Train(trainSpace, keyboard, hint)

train.setLessons(new Lessons(characterSet));
train.onComplete(train.next)
train.onMistake((expected,entered)=>{
	train.setHint(`${expected}: ${keyboard.decode(expected).join('')}`);
	train.retake();
})