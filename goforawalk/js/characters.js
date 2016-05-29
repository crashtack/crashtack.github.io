function test(name) {
	this.name = name;
	this.response = "hello there";
}

function dog(name) {
	this.name = name;
	this.responses = {
		happy: "The dog happily greets you in that special way that only dogs do.",
		scared: "The dog cowers behind it's owner.",
		angry: "The dog growels and barks a waring at you."
	};
}

function RandomPerson(name) {
	this.name = name;
	this.responses = {
		happy: "The " + this.name + " waves and says hello",
		indifferent: "The " + this.name + " walks by without saying hello."
	};
}
