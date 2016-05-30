/*
	Character and World file
*/

function test(name) {  // Testing building the 'spot' class
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

function randomPerson(type) {
	this.name = type;
	this.responses = {
		happy: "The " + this.name + " waves and says hello",
		ignore: "The " + this.name + " goes by without saying hello",
		angry: "The " + this.name + " crosses the street to pass you",
		happyDog: "The " + this.name + " happily greets you in that special way that only dogs do",
		scaredDog: "The " + this.name + " cowers behind it's owner.",
		angryDog: "The " + this.name + " growels and barks a waring at you"
	};
	this.randomResponse = function() {
		var randomNum = Math.floor((Math.random() * 3) +1);
		if (randomNum === 1){
			if (type === "dog") {return this.response.happyDog;}
			else {return this.responses.happy;}		
		}
		else if (randomNum === 2) {
			if (type === "dog") {return this.response.scaredDog;}
			else {return this.responses.ignore;}
		}
		else {
			if (type === "dog") {return this.response.angryDog;}
			else {return this.responses.angry;}
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

function spot(name) {
	this.name = name;
	this.directions = false;
	this.nextSpot = false;
	this.interaction = false;
	this.distanceFromLastSpot = false;
	
	this.builder = function() {
		switch (this.name) {
			case "home": {
				this.dir1 = "left";
				this.dir2 = "right";
				this.nextSpot1 = "corner1";
				this.nextSpot2 = "corner2";
				this.interaction = false;
				this.distanceFromLastSpot = 0;
				this.message = "You walk out the door and can either pull you master to the left or the right\n\nEnter " + this.dir1 + " or " + this.dir2;
				break;
			}
			case "corner1": {
				this.dir1 = "left";
				this.dir2 = "right";
				this.nextSpot1 = "dognutShop";
				this.nextSpot2 = "coffeeShop";
				this.interaction = "randomPerson";
				this.distanceFromLastSpot = 3;
				break;
			}
			case "dognutShop": {
				this.dir1 = false;
				this.dir2 = false;
				this.nextSpot1 = false;
				this.nextSpot2 = false;
				this.interaction = "shopOwner";
				this.distanceFromLastSpot = 2;
				break;
			}
			case "coffeeShop": {
				this.dir1 = false;
				this.dir2 = false;
				this.nextSpot1 = false;
				this.nextSpot2 = false;
				this.interaction = "shopOwner";
				this.distanceFromLastSpot = 1;
				break;
			}
			case "corner2": {
				this.directions = ["straight","right"];
				this.nextSpot = ["park","aroundBlock"];
				this.interaction = "randomPerson";
				this.distanceFromLastSpot = 1;
				break;
			}
			case "park": {
				this.dir1 = false;
				this.dir2 = false;
				this.nextSpot1 = false;
				this.nextSpot2 = false;
				this.interaction = "randomPerson";
				this.distanceFromLastSpot = 4;
				this.message = "You make it to the park"
				break;
			}
			case "aroundBlock": {
				this.dir1 = false;
				this.dir2 = false;
				this.nextSpot1 = false;
				this.nextSpot2 = false;
				this.interaction = "randomPerson";
				this.distanceFromLastSpot = 3;
				this.message = "You turn right for a walk around the block"
				break;
			}
		}	
	};
}

// Create the randomEncounter Object with 2 methods
// method 1 to check for a random encounter and return true/false
// method 2 to selct the type of person encountered (Old Man, kid on bike, jogger, dog, Person pushing stroller)
// run alert(ramdomPerson.randomResponse(type))
var randomEncounter = function(distanceFromLastSpot) {
	var randomNum = 0;
	var type = false;
	
	for (var i = 0; i < distanceFromLastSpot; i++) {
		randomNum = Math.floor((Math.random() * 3) +1); // Gives a 33% chance for a random encounter for each block traveled
		if (randomNum === 1){
			randomNum = Math.floor((Math.random() * 5) +1);
			switch (randomNum){
				case 1: type = "old man"; break;
				case 2: type = "kid on a bike"; break;
				case 3: type = "jogger"; break;
				case 4: type = "person pushing a stroller"; break;
				case 5: type = "dog"; break;
			}
		}
		else { return false; }
	}

	if (type){
		alert(randomPerson.randomResponse(type));
	}
	return;
};
