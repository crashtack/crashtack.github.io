var OtherDog = function(name) {
	this.name = name;
	this.responses = {
		happy: "The dog happily greets you in that special way that only dogs do.",
		scared: "The dog cowers behind it's owner.",
		angry: "The dog growels and barks a waring at you."
	};
}

var RandomPerson = function(name) {
	this.name = name;
	this.responses = {
		happy: "The " + name + " waves and says hello"
		indifferent: "The " + name + " walks by without saying hello."
	}
}
