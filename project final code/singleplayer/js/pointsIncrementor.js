//Factory Design Pattern
function setPointsIncrementor(difficulty) {
	var game;
	if(difficulty == "easy"){
		game = new Easy();
	}
	if(difficulty == "medium"){
		game = new Medium();
	}
	if(difficulty == "hard"){
		game = new Hard();
	}
	return game.pointsIncrementor;
}

var Easy = function () {
    this.pointsIncrementor = 10;
};
 
var Medium = function () {
    this.pointsIncrementor = 20;
};
 
var Hard = function () {
    this.pointsIncrementor = 30;
};