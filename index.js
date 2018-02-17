function theBeatlesPlay(musician, instrument){
  var pairs = []
  for (let i = 0; i < musician.length; i++) {
    pairs[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return pairs
}
/*
function johnLennonFacts(facts) {
    while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}
*/

function iLoveTheBeatles(n){
  var array = [];
  do {
  array.push("I love the Beatles!");
  n++;
  } while (n < 15)
  
  return array;
}
