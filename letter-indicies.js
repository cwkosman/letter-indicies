function countLetters(string) {
  var singleLetters = string.split('');
  var counter = singleLetters.reduce((letterTally, letter, i) => {
    if (letter != ' ') {
      if (!letterTally[letter]) {
        letterTally[letter] = {};
        letterTally[letter]["count"] = 0;
        letterTally[letter]["index"] = [];
      }
        letterTally[letter]["count"]++;
        letterTally[letter]["index"].push(i);
      }
    return letterTally;
  }, {});
  console.log(counter);
}

countLetters("lighthouse in the house");
