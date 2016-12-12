//Array of compression strings, one of these will be randomly picked and displayed on the screen.
var compressionStr = [
  "This is the text that has to be compressed. This is going to be compressed by the player",
  "Java is an object oriented language. The languages which are object oriented like java has OOPS concepts like abstraction, inheritace etc. The inheritace feature gives the advantage of code reuse",
  "Change the world to technology, technology effects every field, it is not just about computers anymore, and it is not just about tablets or smart phones, technology is about medicine, energy, transportation",
  "Computing and technology has transformed society from the laptop we use to work and play, to medicine, to home as IoT, to GPS to self driving cars. Computing effects every one and every field, we need every one fluent in computing and technology",
  "To access an object we use reference variable, reference variable can be of only one type, reference variable cannot be changed, reference variable can be reassigned to other objects, reference variable can be declared as a class or interface type",
  "Agile software development refers to a group of software development methods which are based on iterative development. Agile methods or agile processes generally promote a disciplined project management process",
  "Betty botter bought a bit of butter but she said butter is bitter if I put in my batter it will make my batter bitter but a bit of better butter will make my batter better so she bought a bit of butter better than her bitter butter made her bitter batter better so it was better betty botter bought a bit of better butter",
  "Esau wood saw wood. esau wood would saw wood. Oh, the wood that wood would saw! one day esau wood saw a saw saw wood as no other wood saw wood ever saw would saw wood, wood ever saw saw wood, wood never saw a wood saw that would saw wood like the wood saw wood saw would saw wood now esau wood saws with that saw he saw saw wood ",
  "As I was in Arkansas I saw a saw that could out saw any saw I ever saw saw. If you happen to be Arkansas and see a saw that can out saw the saw I saw saw Id like to see the saw you saw saw",
  "A fly and flea flew into flue, said the fly to the flea  what shall we do?, let us fly said the flea said the fly shall we flee so they flew through a flaw in the flue",
  "There was an old lady who swallowed a cow. I don't know how she swallowed a cow! She swallowed the cow to catch the goat. She swallowed the goat to catch the dog. She swallowed the dog to catch the cat. She swallowed the cat to catch the bird. She swallowed the bird to catch the spider. That wriggled and jiggled and wiggled inside her. She swallowed the spider to catch the fly. But I don't know why she swallowed that fly. Perhaps she'll die.",
  "Suzie, Suzie, working in a shoeshine shop. All day long she sits and shines, all day long she shines and sits, and sits and shines, and shines and sits, and sits and shines, and shines and sits. Suzie, Suzie, working in a shoeshine shop. Tommy, Tommy, toiling in a tailor’s shop. All day long he fits and tucks, all day long he tucks and fits, and fits and tucks, and tucks and fits, and fits and tucks, and tucks and fits. Tommy, Tommy, toiling in a tailor’s shop.",
  "A plain is a flat area, plains occur as lowlands along the bottoms of valleys, coastal plains and as plateaus or uplands at high elevations. In a valley, plains are enclosed on two sides but in other cases  plains may be delineated by a complete or partial ring of hills, by mountains or cliffs.",  
  "To sit in solemn silence in a dull, dark dock, In a pestilential prison, with a life-long lock, Awaiting the sensation of a short, sharp shock, From a cheap and chippy chopper on a big black block! To sit in solemn silence in a dull, dark dock, In a pestilential prison, with a life-long lock, Awaiting the sensation of a short, sharp shock, From a cheap and chippy chopper on a big black block! A dull, dark dock, a life-long lock, A short, sharp shock, a big black block! To sit in solemn silence in a pestilential prison, And awaiting the sensation From a cheap and chippy chopper on a big black block!",
  "Bought me a cat and the cat pleased me, I fed my cat under yonder tree. Cat goes fiddle-i-fee.Bought me a hen and the hen pleased me, I fed my hen under yonder tree. Hen goes chimmy-chuck chimmy-chuck Cat goes fiddle-i-fee. Bought me a duck and the duck pleased me I fed my duck under yonder tree. Duck goes quack quack Hen goes chimmy-chuck chimmy-chuck Cat goes fiddle-i-fee. Bought me a goose and the goose pleased me I fed my goose under yonder tree. Goose goes hissy hissy Duck goes quack quack Hen goes chimmy-chuck chimmy-chuck Cat goes fiddle-i-fee. Bought me a sheep and the sheep pleased me I fed my sheep under yonder tree. Sheep goes baa baa Goose goes hissy hissy Duck goes quack quack Hen goes chimmy-chuck chimmy-chuck Cat goes fiddle-i-fee.",
  "I have a pen, I have an apple. Uh! Apple Pen I have a pen, I have Pineapple. Uh! Pineapple Pen Apple pen. Pineapple pen uh! Pen Pineapple Apple Pen! Pen Pineapple Apple Pen!",
  "In object-oriented programming, polymorphism (from the Greek meaning having different forms) is the characteristic of being able to assign a different meaning or usage to something in different contexts - specifically, to allow an entity such as a variable, a function, or an object to have more than one form. There are several different kinds of polymorphism. A variable with a given name may be allowed to have different forms and the program can determine which form of the variable to use at the time of execution. For example, a variable named USERID may be capable of being either an integer (whole number) or a string of characters (perhaps because the programmer wants to allow a user to enter a user ID as either an employee number - an integer - or with a name - a string of characters). By giving the program a way to distinguish which form is being handled in each case, either kind can be recognized and handled.",
  "San Jose State University (commonly referred to as San Jose State or SJSU) is a comprehensive public university located in San Jose, California, United States. It is the founding school of the 23-campus California State University (CSU) system, and holds the distinction of being the oldest public university of higher education on the West Coast of the United States. Located in Downtown, San Jose. University offers 134 under graduate and graduate degree programs. The university also offers three doctoral degree programs. University offers master degree programs like Software Engineering, Electrical Engineering, Computer Engineering. Software Engineering being the most popular degree program. San Jose State University sports team are known as Spartans",
  "In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations. Also in software engineering, a software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.",
  "The Agile methodology is a particular approach to project management that is utilized in software development. This method assists teams in responding to the unpreditability of constructing software. It uses incremental, iterative work sequences that are commonly known as sprints. Scrum is part of the Agile methodology. Agile is a response to the failure of the dominant software development project management paradigms (including waterfall) and borrows many principles from lean manufacturing. Scrum emphasizes decision making from real-world results rather than speculation. A scrum master is the facilitator for an agile development team. Scrum is a methodology that allows a team to self-organize and make changes quickly, in accordance with agile principles. The scrum master manages the process for how information is exchanged.",
  "In signal processing, data compression, source coding, or bit-rate reduction involves encoding the information using fewer bits than the original representation. Compression can be either lossy or lossless, lossless compression reduces bits by identifying and eliminating the statistical redundancy. No information is lost in lossless compression. Lossy compression reduces bits by removing unnecessary or less important information. The process of reducing the size of a data file is referred to as data compression. In the context of data transmission, it is called source coding (encoding done at the source of the data before it is stored or transmitted) in opposition to channel coding",
  "A long time ago, in a big beautiful forest there lived many animals. The animals in the forest were happy and they lived a wonderful life. One reason that the animals were happy was because in the forest there also lived a little princess. The little princess had long curly, blonde hair. Do you know what her name was? It might surprise you but her name was Marina! Yes, Marina, a beautiful name for a beautiful little princess. Every morning she would go to the park near the river to play with her friends. Mrs Rabbit, Mr Skunk and the very young deer were her best friends. One day they were playing together. They were having so much fun that they lost track of the time. The sun went down and it became dark. The little animals were afraid to go home alone. Princess Marina had an idea. She said, Why don't you all come to my grandpa's home with me. Grandpa doesn't mind it when I bring my friends to his place. When Marina and her friends arrived at her grandpa's house her invited them in. He gave them all the treats that they could eat. After they ate they all played games. After a time Grandpa in a deep loud voice said, It's time for bed now. Grandpa gathered all the friends around and told them a bedtime story. Before long everyone was fast asleep. In the morning it was safe for the animals to go home. Everyday Marina and her friends still play but now they make sure that they go home before it gets dark.",
  "Once upon a time there was a sailboat named Troy. He always tried so hard to do his job right. One day Troy's father came up to him and told Troy that he was going to have a long journey tomorrow. Troy would need another sailboat to come with him. He had to decide whom he wanted to take. Troy thought about taking sailboat Sabin but Sabin was too small and weak. Then Troy thought about sailboat Trinelle. No! He said to himself, She is a girl. Hey! I know who I can take, Shaleisha. Once again he thought about his choice and again he said, No, I can't take her. She can't carry anything that's heavy; she will probably sink. I really don't know whom I can take. Boy-oh-Boy! he said to himself, Think, think, think! That's what I always do! I'm going to give myself a headache. Suddenly, his eyes grew bright. He had an idea! Jessica sailboat! I know she is a girl but she's big and a little wiser than I am. Wow! I'm going to have a wonderful time with her tomorrow. Well, now that I know whom I'm taking, I'm going to bed. I have a long journey.",
  "Once upon a time there was a mouse named Michael and there was a Dog named Butch. They both lived in a two story house with a family of seven. Michael lived in the basement all by himself. Michael was a lonely mouse.He couldn't talk to anyone. The little mouse often went up stairs to go see what was going on. Butch was a huge bull Dog, but he was a friendly dog to everyone. He was light brown with a short tail. One night as the Simpson family was watching movies, Butch decided to go down to the basement and check it out. When he got down there, he sniffed around the little mouse on the old couch. Michael watched as Butch sniffed around his humble home. Butch finally noticed Michael shaking in one corner of couch. Butch slowly moved up to him. Butch looked curiously at Michael. He asked, Who are you? Michael mouth was wide open. He was shocked to hear this creature talking to him. Michael said in a shaky voice? My name is Michael. Butch looked at Michael and told him Don't be afraid. Butch started talking to Michael about where he came from and the places he has been. Michael felt at ease as Butch started talking to him about his life. Weeks past by as Michael and Butch got to know each other. Both Michael and Butch started hanging out at Michael place, in the basement. From there they became friends, after so many years of being alone. Michael's prayers were answered. He was very happy he found a friend to talk to.",
  


];
