function sendConfig(argument) {
	var game = new gameConfig();
	Duration(game);
	Difficulty(game);
	StringType(game);
	console.log(game);
	var params = game;
	window.location="singlePlayer.html?"+jQuery.param( params );
}


//What we're going to decorate
function gameConfig() {
    
}
/*Decorator 1*/
function Duration(game) {
	var duration = document.configForm.duration.value;
	console.log("Duratinon --> " + duration);
    game.duration = duration;
}
 /*Decorator 2*/
function Difficulty(game){
   var difficulty = document.configForm.difficulty.value;
   game.difficulty = difficulty;
}

/*Decorator 3*/
function StringType(game){
   var stringType = document.configForm.stringType.value;
   game.stringType = stringType;
}

//Jquery Starts here
$(document).ready(function () {
	//this code shows and hides the custom string textbox area
    $("#custom-string").hide();
    $("#custom-string-rbutton").click(function () {
        $("#custom-string").show();
    });
    $("#default-string-rbutton").click(function () {
        $("#custom-string").hide();
    });
});

