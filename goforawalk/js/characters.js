/*
	Character and World file
*/

function test1(name) {  // A simple class decleration
	this.name = name;
	this.response = "hello there";
}

function test(name) {  // A simple class decleration
	this.name = name;
	this.response = "hello there";
	this.directions = false;
	this.nextSpot = false;
	this.interaction = false;
	this.distanceFromLastSpot = false;
	
	this.builder = function() {
		switch (this.name) {
			case "home": {
				this.directions = ["left","right"];
				this.nextSpot = ["corner1","corner2"];
				this.interaction = false;
				this.distanceFromLastSpot = 0;
				break;
			}
			case "corner1": {
				this.directions = ["left","right"];
				this.nextSpot = ["dognutShop","coffeeShop"];
				this.interaction = "randomPerson";
				this.distanceFromLastSpot = 3;
				break;
			}
			case "dognutShop": {
				this.directions = false;
				this.nextSpot = false;
				this.interaction = "shopOwner";
				this.distanceFromLastSpot = 2;
				break;
			}
		}	
	};
}

/* Character Class Declerations */
function dog(name) {
	this.name = name;
	this.responses = {
		happy: "The dog happily greets you in that special way that only dogs do",
		ignore: "The dog cowers behind it's owner.",
		angry: "The dog growels and barks a waring at you."
	};
	this.randomResponse = function() {
		var randomNum = Math.floor((Math.random() * 3) +1);
		if (randomNum === 1){
			return this.responses.happy;
		}
		else if (randomNum === 2) {
			return this.responses.ignore;
		}
		else {
			return this.responses.angry;
		}
	};
}

function randomPerson(name) {
	this.name = name;
	this.responses = {
		happy: "The " + this.name + " waves and says hello",
		ignore: "The " + this.name + " goes by without saying hello",
		angry: "The " + this.name + " crosses the street to pass you"
	};
	this.randomResponse = function() {
		var randomNum = Math.floor((Math.random() * 3) +1);
		if (randomNum === 1){
			return this.responses.happy;
		}
		else if (randomNum === 2) {
			return this.responses.ignore;
		}
		else {
			return this.responses.angry;
		}
	};
}

function shopOwner(name, product) {
	this.name = name;
	this.product = product;
	this.responses = {
		happy: "The " + this.name + " greets you warmly and gives you a big " + product,
		ignore: "The " + this.name + " ignores you",
		angry: "The " + this.name + " yells at your owner to get you out of the shop"
	};
	this.randomResponse = function() {
		var randomNum = Math.floor((Math.random() * 3) +1);
		if (randomNum === 1){
			return this.responses.happy;
		}
		else if (randomNum === 2) {
			return this.responses.ignore;
		}
		else {
			return this.responses.angry;
		}
	};
}
