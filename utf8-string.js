class Utf8{
	string = [];

	constructor(){
		return new Proxy(this,{
			get(self,property){
				return self[property]??self.toString()[property];
			}
		});
	}

	get length(){
		return this.string.length;
	}

	copy(){
		return (new Utf8).set(this.toString());
	}

	putUtf8(uint){
		this.string.push(uint);
		return this;
	}

	set(string){
		this.string = (encodeURIComponent(string).match(/%..|./g)??[])
			.map(chr =>
				chr.length==1
					?chr.charCodeAt(0)
					:parseInt(chr.substring(1),16)
			)
		;
		return this;
	}

	toString(){
		return decodeURIComponent(
			(this.string.length==0?'':'%')
			+ this.string.map(
				(uint)=>uint.toString(16).padStart(2,'0')
			).join('%')
		);
	}
}
