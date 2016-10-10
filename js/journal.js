function Entry() {

}

Entry.prototype.wordCount = function(entry) {
  var splitArray = entry.split(" ").length;
  return splitArray;
};

Entry.prototype.vowelCount = function(entry) {
  var count = 0;
  var splitArray = entry.split("");
  var vowels = [];
  for (var i = 0; i < splitArray.length; i++) {
    if(splitArray[i] === "a" || splitArray[i] === "e" || splitArray[i] === "i" || splitArray[i] === "o" || splitArray[i] === "u" && splitArray[i] !== " ") {
        vowels.push(splitArray[i]);
        count++;
      }
    }
    return vowels && count;
  };

Entry.prototype.consonantCount = function(entry) {
  var count = 0;
  var splitArray = entry.split("");
  var consonants = [];
  for (var i = 0; i < splitArray.length; i++) {
    if(splitArray[i] !== "a" && splitArray[i] !== "e" && splitArray[i] !== "i" && splitArray[i] !== "o" && splitArray[i] !== "u" && splitArray[i] !== " ") {
      consonants.push(splitArray[i]);
      count++;
    }
  }
  return consonants && count;
};

Entry.prototype.firstEightWords = function(entry) {
  var result = [];
  var splitArray = entry.split(" ");
  if(splitArray.length <= 7) {
    for (var i = 0; i <= splitArray.length; i++) {
      result.push(splitArray[i]);
    }
  } else if (splitArray.length > 8) {
    for (var j = 0; j <= 7; j++) {
      result.push(splitArray[j]);
    }
  }
  return result;
};


exports.journalModule = Entry;
