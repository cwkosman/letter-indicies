function countLetters(str) {
  const whiteSpaceRe = /\s/;
  return Array.from(str).reduce((tally, letter, i) => {
    //code smell - something you see in code the might belie an underlying problem. Nested if statements might be combineable, though not the case here
    if (!whiteSpaceRe.test(letter)) {
      if (!tally[letter]) {
        tally[letter] = {
          count: 0,
          index: []
        };
      }
      tally[letter].count++;
      tally[letter].index.push(i);
    }
    return tally;
  }, {});
}

console.log(countLetters("lighthouse in the house"));
