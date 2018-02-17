function theBeatlesPlay(musician, instrument){
  var pairs = []
  for (let i = 0; i < musician.length; i++) {
    pairs[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return pairs
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}