//Strategy 
var hashedBest = [];
function insertIntoHashMap(draggedWord, index) {
    //  console.log("Compressed Array is: ", compressedArray);
    compressedArray[index] = "1";  
    //insert only if word is not already in array
    var word = removeSymbols(draggedWord);
    if (hashedWords.indexOf(word) > -1) {
    //In the array!
    } else {
    //Not in the array
        console.log("Word being inserted into array: ",draggedWord);
        hashedWords.push(word);
    }

}

//Strategy 
function calculateCompressedStringLength() {

    var compressedLength = 0;
    gameFinished = true;

    var originalLength = getOriginalLengthOfString();
    compressedLength += getLengthOfCompressedParagraph() + getSizeOfHashMap();

    console.log("Original length is: ", originalLength);
    console.log("Compressed final length is: ", compressedLength);

    var percentageCompressionAchieved = (originalLength-compressedLength)/originalLength*100;

    console.log("percentageCompressionAchieved is: ", percentageCompressionAchieved);

    percentageCompressionAchieved = Math.round(percentageCompressionAchieved * 100) / 100

    //set result to screen
    if (percentageCompressionAchieved > 0) {
        $('#yourresult').text("Superb! You managed a total of " + percentageCompressionAchieved +  "% compression" );
    } else {
        $('#yourresult').text("Duh! You managed a total of " + percentageCompressionAchieved +  "% compression. You can do better!" );
    }

    maxPossibleCompression();


}

//facade
function getLengthOfCompressedParagraph() {
    var length = 0;
    for (var i=0; i<compressedArray.length; i++) {
        length += compressedArray[i].length;
    }
    return length;
}

//facade
function getSizeOfHashMap() {
    var length = 0;
    for (var i=0; i<hashedWords.length; i++) {
        length += hashedWords[i].length;
    } 
    length += hashedWords.length;
    return length;
}

//facade
function getOriginalLengthOfString() {
    var originalLength = 0;
    for (var i=0; i<arrWithoutSymbols.length; i++) {
        originalLength += arrWithoutSymbols[i].length;
    }
    return originalLength;
}

//strategy
function maxPossibleCompression() {
    var originalArrayBest = arrWithoutSymbols.slice();
    var compressedArrayBest = arrWithoutSymbols.slice();
    

    for (var i=0; i<originalArrayBest.length; i++) {
                
        var word = originalArrayBest[i];

        if (word.length < 2){
                continue;
        }

        //if word length ==2, dont compress until count is > 2
            if (word.length == 2) {
             
                var count = 0;
                for (var k = 0; k<originalArrayBest.length; k++) {
                 
                    if (originalArrayBest[k] == word) {
                        count++;
                    }
                }

                if (count < 3) {
                    continue;
                }
            }

        for (var j = i+1; j<originalArrayBest.length; j++) {
              
            //check if duplicate exists
            if(originalArrayBest[j] == word){
            //check if word is in hashedArray  
                if (hashedBest.indexOf(word) > -1) {  
                    //in the array, replace indexes.
                    compressedArrayBest[j] = "1";
                }  else {
                   //if its not in, insert into hashed array,
                   hashedBest.push(word);
                   compressedArrayBest[i] = "1";
                   compressedArrayBest[j] = "1";
                }
            }
       
        }

    }

    var originalLength = getOriginalLengthOfString();
    var compressedLength = 0;

    for (var i=0; i<compressedArrayBest.length; i++) {
        compressedLength += compressedArrayBest[i].length;
    }

    for (var i=0; i<hashedBest.length; i++) {
        compressedLength += hashedBest[i].length;
    }

    compressedLength += hashedBest.length;

    console.log("Compressed Best Array is: ", compressedArrayBest);
    console.log("Hashed Best Array is: ", hashedBest);


    var percentageCompressionAchieved = (originalLength-compressedLength)/originalLength*100;

    percentageCompressionAchieved = Math.round(percentageCompressionAchieved * 100) / 100

    console.log("Original Best Length", originalLength);
    console.log("Compressed Best Length", compressedLength);
    console.log("percentageCompressionAchieved Best", percentageCompressionAchieved);
    //set result to screen
    $('#bestresult').text("Maximum Possible Compression is " + percentageCompressionAchieved +  "%");

    return percentageCompressionAchieved;    

}
