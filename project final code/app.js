//using express to fetch files to be served
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var verbose = false;
var winnerFound = false;
// the strings which will be displayed randomly in multiplayer mode
var compressionStr = [
  "Java is an object oriented language. The languages which are object oriented like java has OOPS concepts like abstraction, inheritace etc. The inheritace feature gives the advantage of code reuse. To access an object we use reference variable, reference variable can be of only one type, reference variable cannot be changed, reference variable can be reassigned to other objects, reference variable can be declared as a class or interface type.",
  "Change the world to technology, technology effects every field, it is not just about computers anymore, and it is not just about tablets or smart phones, technology is about medicine, energy, transportation. Computing and technology has transformed society from the laptop we use to work and play. Computing effects every one and every field, we need every one fluent in Computing and technology.",
  "For accessing an object we use reference variable, reference variable can be of only one type, reference variable cannot be changed, reference variable can be reassigned to other objects, reference variable can be declared as a class or interface type, reference variable can be declared as static variable, reference variable holds the memory address of the object.",
  "Betty botter bought a bit of butter but she said butter is bitter if I put in my batter it will make my batter bitter but a bit of better butter will make my batter better so she bought a bit of butter better than her bitter butter made her bitter batter better so it was better betty botter bought a bit of better butter." ,
  "Esau wood saw wood. esau wood would saw wood. Oh, the wood that wood would saw! one day esau wood saw a saw saw wood as no other wood saw wood ever saw would saw wood, wood ever saw saw wood, wood never saw a wood saw that would saw wood like the wood saw wood saw would saw wood now esau wood saws with that saw he saw saw wood.",
  "There was an old lady who swallowed a cow. I do not know how she swallowed a cow! She swallowed the cow to catch the goat. She swallowed the goat to catch the dog. She swallowed the dog to catch the cat. She swallowed the cat to catch the bird. She swallowed the bird to catch the spider. That wriggled and jiggled and wriggled inside her. She swallowed the spider to catch the fly. But I don't know why she swallowed that fly. Perhaps she will die.",
  "Suzie, Suzie, working in a shoeshine shop. All day long she sits and shines, all day long she shines and sits, and sits and shines, and shines and sits, and sits and shines, and shines and sits. Suzie, Suzie, working in a shoeshine shop. Tommy, Tommy, toiling in a tailors shop. All day long he fits and tucks, all day long he tucks and fits, and fits and tucks, and tucks and fits, and fits and tucks, and tucks and fits. Tommy, Tommy, toiling in a tailors shop.",
  "A plain is a flat area, plains occur as lowlands along the bottoms of valleys, coastal plains and as plateaus or uplands at high elevations. In a valley, plains are enclosed on two sides but in other cases  plains may be delineated by a complete or partial ring of hills, by mountains or cliffs.",  
  "To sit in solemn silence in a dull, dark dock, in a pestilential prison, with a life-long lock, Awaiting the sensation of a short, sharp shock, From a cheap and chippy chopper on a big black block! To sit in solemn silence in a dull, dark dock, in a pestilential prison, with a life-long lock, Awaiting the sensation of a short, sharp shock, From a cheap and chippy chopper on a big black block!.",
  "Bought me a cat and the cat pleased me, I fed my cat under yonder tree, cat goes fiddle-i-fee. Bought me a hen and the hen pleased me, I fed my hen under yonder tree, hen goes chimmy-chuck chimmy-chuck cat goes fiddle-i-fee. Duck goes quack quack hen goes chimmy-chuck chimmy-chuck cat goes fiddle-i-fee. Bought me Goose goes hissy hissy Duck goes quack quack hen goes chimmy-chuck chimmy-chuck cat goes fiddle-i-fee. ",
  "In object-oriented programming, polymorphism is the characteristic of being able to assign a different meaning or usage to something in different contexts - specifically, to allow an entity such as a variable, a function, or an object to have more than one form. A variable with a given name may be allowed to have different forms and the program can determine which form of the variable to use at the time of execution.",
  "San Jose State University commonly referred to as San Jose State or SJSU is a comprehensive public university located in San Jose, California, United States. It is the founding school of the 23-campus California State University (CSU) system, and holds the distinction of being the oldest public university of higher education on the West Coast of the United States. University offers master degree programs like Software Engineering, Electrical Engineering, Computer Engineering. ",
  "In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations. ",
  "The Agile methodology is a particular approach to project management that is utilized in software development. It uses incremental, iterative work sequences that are commonly known as sprints. Agile is a response to the failure of the dominant software development project management paradigms including waterfall and borrows many principles from lean manufacturing. ",
  "In signal processing, data compression, source coding, or bit-rate reduction involves encoding the information using fewer bits than the original representation. Compression can be either lossy or lossless, lossless compression reduces bits by identifying and eliminating the statistical redundancy. No information is lost in lossless compression. Lossy compression reduces bits by removing unnecessary or less important information. ",
  "A long time ago, in a big beautiful forest there lived many animals. The animals in the forest were happy and they lived a wonderful life. One reason that the animals were happy was because in the forest there also lived a little princess. The little princess had long curly, blonde hair. Do you know what her name was? It might surprise you but her name was Marina! Yes, Marina, a beautiful name for a beautiful little princess.",
  "Once upon a time there was a sailboat named Troy. He always tried so hard to do his job right. One day Troy father came up to him and told Troy that he was going to have a long urney tomorrow. Troy would need another sailboat to come with him. He had to decide whom he wanted to take. Troy thought about taking sailboat Sabin but Sabin was too small and weak. Then Troy thought about sailboat Trinelle. No! He said to himself, She is a girl. ",
  "Once upon a time there was a mouse named Michael and there was a dog named Butch. They both lived in a two story house with a family of seven. Michael lived in the basement all by himself. Michael was a lonely mouse. He couldn't talk to anyone. The little mouse often went up stairs to go see what was going on. Butch was a huge bull dog, but he was a friendly dog to everyone. He was light brown with a short tail."
];

var str = compressionStr[Math.floor(Math.random() * compressionStr.length)];
var myMap = {};
var counter = 0;
var count = 0;
var myArr = [];
var SOCKET_LIST = {};
var playersList = {};
var io = require('socket.io')(serv, {});
var noOfPlayers;
var temp_obj = {};


app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});
//app.use('/',express.static(__dirname + '/*'));
app.get('/*', function (req, res, next) {

	//This is the current file they have requested
	var file = req.params[0];

	//For debugging, we can track what files are requested.
	if (verbose) console.log('\t :: Express :: file requested : ' + file);

	//Send the requesting client the file.
	res.sendFile(__dirname + '/' + file);

});

serv.listen(process.env.PORT || 5000);
console.log("Server started.");
//do the following when a client socket connects
io.sockets.on('connection', function (socket) {
	user_name = Math.random().toString(36).substr(2, 9);
	SOCKET_LIST[socket.id] = socket;
	playersList[user_name] = socket.id;
	noOfPlayers = Object.keys(playersList).length;
	console.log("len", noOfPlayers);
	//console.log("len",socket[sID]);
	for (var i in playersList) {
		console.log("userd id ", playersList[i]);

	}
	console.log("Sending socket ID to client: ", socket.id);
	socket.emit('sendid', user_name);
	//for (var i in SOCKET_LIST) {

	//	var socket = SOCKET_LIST[i];
	socket.emit('newString', str);


	//}

	// receive final score and unique id from each server(send)
	socket.on('myscore', function (data) {
		counter += 1;
		if (counter <= noOfPlayers - 1) {
			socket.emit('check results', "Waiting for other players to complete");
		}
		//console.log("client-ID: " + data.id + "score: " + data.score);
		// store client id(user_name) and final score for each client in a map
		myMap[data.id] = parseInt(data.score);
		for (var key in myMap) {
			if (myMap.hasOwnProperty(key)) {
				console.log(key + " -> " + myMap[key]);
			}
		}
		//sort the key values(user_name) by the value(final_score) and store it in a list
		keysSorted = Object.keys(myMap).sort(function (a, b) { return myMap[b] - myMap[a] });
		//console.log("aklsbcaklsj", keysSorted);
		len2 = keysSorted.length;
		//console.log("zero", keysSorted[0]);
		//console.log(counter + " length " + noOfPlayers);
		// sort the scores and store them in an array
		for (var i = 0; i < len2; i++) {
			myArr[i] = myMap[keysSorted[i]];
		}
		//console.log("sorted Array", myArr);
		if (counter == noOfPlayers) {
			for (var i = 0, j = 0; j < len2; j++) {
				if (myArr[i] == myArr[j]) {
					count += 1

				}
			}
			//console.log("ahbdfks", playersList[keysSorted[0]]);
			if (myMap[keysSorted[0]] != myMap[keysSorted[1]]) {
				io.sockets.connected[playersList[keysSorted[0]]].emit('send msg', "Congratulations! You have won.");
				for (var i = 1; i < len2; i++) {
					io.sockets.connected[playersList[keysSorted[i]]].emit('send msg', "Oops! You couldn't make it.");
				}
			}
			else {
				for (var i = 0; i < count; i++) {
					io.sockets.connected[playersList[keysSorted[i]]].emit('send msg', "It's a draw.");
				}
				for (var i = count; i < len2; i++) {
					io.sockets.connected[playersList[keysSorted[i]]].emit('send msg', "Oops! You couldn't make it.");
				}
			}
		}
	});
// delete socket id from the list when it disconnects
	socket.on('disconnect', function () {
		delete SOCKET_LIST[socket.id];
	});

});

