import React from "react";
export default function Characters(props) {
  const { characters, setScore, setCharacters } = props;
  const handleCharClick = (i) => {
    const char = [...characters];
    if (char[i].clicked === false) {
      setScore((prevScore) => prevScore + 1);
      char[i].clicked = true;
      setCharacters(char);
    } else {
      setScore((prevScore) => (prevScore = 0));
      char.forEach((e) => {
        e.clicked = false;
      });
      setCharacters(char);
    }
    shuffle();
  };

  const shuffle = () => {
    const chars = [...characters];
    for (let i = 0; i < chars.length; i++) {
      let randNum = Math.floor(Math.random() * chars.length);
      let temp = {};
      let curr = chars[i];
      let randName = chars[randNum];

      temp = curr;
      chars[i] = randName;
      chars[randNum] = temp;
      setCharacters(chars);
    }
  };
  return characters.map((character, i) => {
    return (
      <div
        key={character.name}
        className="card"
        onClick={(e) => handleCharClick(i, e)}
      >
        <img src={require(`../images/${character.name}.png`)} />
        <h3>
          {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
        </h3>
      </div>
    );
  });
}
