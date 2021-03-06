/*
Title: Go For a Walk
------------------------------------------	
It's 10am Saturday morning and it's time to drag your owner outside for a walk.
Where will you go and what will you see?
----------
Game World
----------
Locations
----------
Home(1)
	Left to corner1(2): distance 3 blocks
		Left to DognutShop(3): distance 2 blocks
		Right to CoffeeShop(4): distance 1 block
	Right to corner2(5): distance 1 block
		Straight to Park(6): distance 4 blocks
		Right to AroundTheBlock(7): distance 3 blocks

Characters						Attributes
----------						----------
- You (Dog)						- name, age, mood, happy responce(), angry responce(), say()
- Other dogs					- name, age, breed, color, mood, happy responce(), angry responce(), say()
- Random person					- sex, age (young, old), scared responce(), happy responce()
- shop owner					- sex, age, discusted responce(), happy responce()
Win and Losses
--------------
- Win: 	make it to the dognut shop and get a free dognut 
		by getting the 'happy responce' from the shop owner
		
		Chase a squirl up a tree
		
- Lose:	Make it back home without having a dognut or chasing a squirl
*/

/* --------Looping function-------------*/
var runInteraction = function() {
	var successfulAnswer = false;
	
	if (currentSpot.dir1 === false) {		// Checks to see if you have reached a destination location
		currentSpot.messageMaker();
		alert(currentSpot.message);
		return;
	}
	else {
		var answer = prompt(currentSpot.message);
		while (successfulAnswer === false) {		// loops until the user enters a valid answer
			if (answer === currentSpot.dir1){
				
				currentSpot = new spot(currentSpot.nextSpot1);
				currentSpot.builder();
				
				// Checks for a random encount while on the way to 
				// the next spot based on the distance between them
				randomEncounter(currentSpot.distanceFromLastSpot);
				successfulAnswer = true;
				runInteraction(currentSpot.name);
							}
			else if (answer === currentSpot.dir2) {
				currentSpot = new spot(currentSpot.nextSpot2);
				currentSpot.builder();
				
				// Checks for a random encount while on the way to 
				// the next spot based on the distance between them
				randomEncounter(currentSpot.distanceFromLastSpot);
				successfulAnswer = true;
				runInteraction(currentSpot.name);
			}
			else {
				message = "Please only ender " + currentSpot.dir1 +  " or " + currentSpot.dir2;
				alert(message);
				successfulAnswer = false;
				answer = prompt(currentSpot.message);
			}
		}
	}	
}; 

/*----------Main--------------*/
alert("Are you Ready?");
var currentSpot = new spot("home");
currentSpot.builder();
runInteraction();
