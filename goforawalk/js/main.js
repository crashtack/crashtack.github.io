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
		
- Lose:	Make it back home without having a dognut
*/

alert("ready");

var thisTest = new test("foobar");
alert(thisTest.name);

var Dude = new randomPerson("Dude");

alert(Dude.responses.happy);

/*
RandomPerson.prototype.randomResponse = function() {
	var randomNum = Math.floor((Math.random() * 2) +1);
	if (randomNum === 1){
		return this.responses.happy;
	}
	else {
		return this.responses.indiffernet;
	}
};
*/


var oldMan = new randomPerson("Old Man");

alert("You meet an " + oldMan.name + " walking down the sidewalk. " + oldMan.randomResponse());

