import React, { useState } from "react";

const Card = (props) => {
  // function who generate random color
  const randomColorGenerator = () => {
    let randomNumberArray = [];
    let value = true;
    while (value) {
      let random = Math.floor(Math.random() * 8);
      if (!randomNumberArray.includes(random)) {
        randomNumberArray.push(random);
      }
      if (randomNumberArray.length === 8) {
        value = false;
      }
    }
    let basicColorArray = [
      "red",
      "green",
      "blue",
      "black",
      "yellow",
      "orange",
      "grey",
      "brown",
    ];
    let randomColorArray = [];
    for (let i = 0; i < 8; i++) {
      randomColorArray.push(basicColorArray[randomNumberArray[i]]);
    }
    return randomColorArray;
  };

  // random color hook
  const [color, setColor] = useState(randomColorGenerator());
  const [colorArray, setColorArray] = useState([]);

  // Props destructuring
  const { score, setScore, setBestScore } = props;

  // function who return the clicked color and generate new random color
  const clickHandler = (event) => {
    const clickColor = event.target.style.backgroundColor;
    setColor(randomColorGenerator());
    scoreHandler(colorArray, setColorArray, clickColor);
  };

  // function who handle props.bestScore

  const bestScoreHandler = () => {
    setBestScore(score);
  };

  // function who change props.score

  const scoreHandler = (arrayHook, setHook, clickedColor) => {
    setHook([...arrayHook, clickedColor]);
    setScore(score + 1);
    if (arrayHook.includes(clickedColor)) {
      bestScoreHandler();
      setScore(0);
      setHook([]);
    }
  };

  return (
    <div className="Card">
      <div
        className="Square"
        id="0"
        style={{ backgroundColor: `${color[0]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="1"
        style={{ backgroundColor: `${color[1]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="2"
        style={{ backgroundColor: `${color[2]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="3"
        style={{ backgroundColor: `${color[3]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="4"
        style={{ backgroundColor: `${color[4]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="5"
        style={{ backgroundColor: `${color[5]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="6"
        style={{ backgroundColor: `${color[6]}` }}
        onClick={clickHandler}
      ></div>
      <div
        className="Square"
        id="7"
        style={{ backgroundColor: `${color[7]}` }}
        onClick={clickHandler}
      ></div>
    </div>
  );
};

export default Card;
