function countLetters(string) {
  //create an array whose entires are each of the letters of the string, minus spaces
  var singleLetters = string.replace(/ /g,'').split('');
  //use the reduce function to pull of a sweet loop
  //reduce takes a very specific callback function structure and is passed an empty initial object
  var counter = singleLetters.reduce((letterTally, letter) => {
    //create the letter as a key if it is not yet there
    if (!letterTally[letter]) {
      letterTally[letter] = 0;
    }
    //increment an existing letter property by 1
    letterTally[letter]++;
    //return the object so it can be handled by .reduce again
    return letterTally;
  }, {});
  console.log(counter);
}

countLetters("lighthouse in the house");
