class Scrabble {
  constructor() {
    this.scoreLookup = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    };
  }

  letterScore(input) {
    for (const key in this.scoreLookup) {
      let value = this.scoreLookup[key];
      if (value.includes(input.toUpperCase())) {
        return parseInt(key);
      }
    }
  }

  score(input) {
    var score = 0;
    let wordArray = input.split("");
    wordArray.forEach(letter => {
      score += this.letterScore(letter);
    });
    return score;
  }
}
