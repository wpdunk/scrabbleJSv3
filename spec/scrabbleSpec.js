describe("Scrabble", function() {
  it("can score a simple single letter word", function() {
    scrabble = new Scrabble();
    expect(scrabble.score("i")).toEqual(1);
  });

  it("can score another single letter word", function() {
    scrabble = new Scrabble();
    expect(scrabble.score("z")).toEqual(10);
  });

  it("can score a multi letter letter word", function() {
    scrabble = new Scrabble();
    expect(scrabble.score("hello")).toEqual(8);
  });
});
