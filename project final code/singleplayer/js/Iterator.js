var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    },
    current: function(){
        return this.index;
    }
}

function putString(items){
    var words = new Iterator(items);    
    counter=0;
    for (var word = words.first(); words.hasNext(); word = words.next()) {
        $( ".string" ).append( "<p id='draggable"+counter+"'>"+word+"</p>" );      
        counter++;
    }
}

function checkDuplicates(items, draggedWord){
    var words = new Iterator(items);
    var matchingIndexes = [];
    count=0;
    for (var word = words.first(); words.hasNext(); word = words.next()) {
        if(word == draggedWord){
            matchingIndexes.push(count); 
        }
        count++;
    }
    return matchingIndexes;
}

function disableDuplicates(items){
    var  indexes = new Iterator(items);
    for (var index = indexes.first(); indexes.hasNext(); index = indexes.next()) {
        var elementSelector = "#draggable" + index;
        $(elementSelector).draggable("disable");
        $(elementSelector).css("opacity", 0.3);
        insertIntoHashMap($(elementSelector).text(), index);         
    }
    
}

