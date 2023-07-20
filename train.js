class Train extends Editor{
	lessons = [];
	lesson = null;
	target = ()=>{};

	hint = null;

	constructor(trainSpace, keyboard, hint){
		super(trainSpace,keyboard);
		this.hint = hint;
	}

	setTarget(target){
		this.workspace.clear();
		this.workspace.target.set(target);
	}

	setHint(hint){
		this.hint.set(hint);
	}

	setLessons(lessons){
		this.lessons = lessons;
		this.next()
	}

	onComplete(action){
		this.workspace.onComplete(action);
	}

	onMistake(action){
		this.workspace.onMistake(action);
	}

	next = ()=>{
		this.lesson ??= this.lessons[Symbol.iterator]();
		let {value:target} = this.lesson.next();
		this.target = target;
		this.setTarget(target());
	}

	retake = ()=>{
		this.setTarget(this.target());
	}
}