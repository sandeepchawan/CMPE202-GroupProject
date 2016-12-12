var numberOfWords;
var arrWithoutSymbols = [];
var compressedArray = [];
var hashedWords = []; 
var gameFinsihed = false;
var timeTaken = 0;
var hintWords = [];
var arr = [];
var finished = false;

$(function(){

  var points = 00;
  var difficulty = getParameterByName('difficulty'); 
  var pointsIncrementor = setPointsIncrementor(difficulty); //Implemented by factory design pattern
	var draggedWord;

  //This will pick the strings randomly from the array 'compressionStr' present in compressionStrings.js file
   var str = compressionStr[Math.floor(Math.random()*compressionStr.length)];
   var temp = str.split(" ");
   for(var i = 0; i<temp.length; i++){
      temp[i] = temp[i].replace(".", "");
      temp[i] = temp[i].replace(",", "");
      temp[i] = temp[i].replace("!", "");
      temp[i] = temp[i].replace("?", "");
   }
   var strWithoutSymbols = temp.join(" "); 
   console.log(strWithoutSymbols);

   //Code to split the string to individual words and put them on screen for dragging
   arr = str.split(" ");
   putString(arr); //Implemented using iterator pattern

   //This array has been created to compare draggedWords with words without symbols like period, comma or exclamation.
   arrWithoutSymbols = strWithoutSymbols.split(" ");
   numberOfWords = arrWithoutSymbols.length;

   //Copy original array
   compressedArray = arrWithoutSymbols.slice();

   //following loop adds the feature of dragging all the words and also gives each word a unique ID
   for(var i=0; i<counter; i++){
      var id = "#draggable" + i;
      $(id).draggable();
      $(id).draggable({ 
          revert: true,
          containment: "#play-area",
          cursor: "crosshair",
          start: function( event, ui ) {
            console.log(ui.helper[0].innerText);
            draggedWord = ui.helper[0].innerText;
            //to remove symbols like period, comma or exclamation from dragged word
            draggedWord = removeSymbols(draggedWord);
          }
      });
    }
   
  //Dragging code ends above

  
  //droppable is the compression box and the following code has the logic to check if dragged word is compressable
  $( "#droppable" ).droppable({
      drop: function( event, ui ) {   
         // this array is used to track the indexes of the words that will match the dragged word
        var matchingIndexes = checkDuplicates(arrWithoutSymbols, draggedWord);//Implemented using decorator pattern
        
        if(matchingIndexes.length<2){ // 2 or more including the word dragged
          $(this).effect("shake");
          var score = $("#score").html();
          $("#score").html(parseInt(score) - 5);
        }
        else{
          $(this).animateCss('bounce');          
          disableDuplicates(matchingIndexes); //Implemented using Iterator Pattern          
          var score = $("#score").html();
          $("#score").html(parseInt(score) + pointsIncrementor);
          final_score = $("#score").html();
        }
      }
    });
});

//this code animates the box
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
//box animation code ends here

//code for timer starts here which uses the function 'getParameterByName()' to fetch duration from query string
var seconds = getParameterByName('duration')*1000;
var time = new Date().getTime() + seconds;
var timeFinished = false;
var clock = $('#clock').countdown(time, {precision: 1000});

clock.on('update.countdown', function (event) {
  var $this = $(this);
  if (event.elapsed || finished) {
    $this.html(event.strftime('00'));
  } else {
    $this.html(event.strftime(' %S '));
  }
}).countdown('start');

clock.on('finish.countdown', function (event) {
  var $this = $(this);
  $this.html(event.strftime('00'));
  if(!finished){
    finish();
  }
  
});
//timer code ends here

//hint code starts here
function hint(){
	//var l = 0;

	maxPossibleCompression();
	var score = $("#score").html();
	$("#score").html(parseInt(score) - 5);
	var a = [], diff = [];
for (var i = 0; i < hashedWords.length; i++) {
        a[hashedWords[i]] = true;
    }

    for (var i = 0; i < hashedBest.length; i++) {
        if (a[hashedBest[i]]) {
            delete a[hashedBest[i]];
        } else {
            a[hashedBest[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    alert(diff[Math.floor(Math.random()*diff.length)])
}





