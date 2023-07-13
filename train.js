class Train extends Editor{
	lessons = [];
	lesson = null;

	constructor(trainSpace, keyboard){
		super(trainSpace,keyboard);
	}

	setTarget(target){
		this.workspace.clear();
		this.workspace.target.set(target);
	}

	setLessons(lessons){
		this.lessons = lessons;
		this.next()
	}

	onComplete(action){
		this.workspace.onComplete(action);
	}

	next(){
		this.lesson ??= this.lessons[Symbol.iterator]();
		let {value:target} = this.lesson.next();
		this.setTarget(target());
	}
}