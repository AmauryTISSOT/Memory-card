import React, { useState, useEffect } from 'react'

const Card = (props) => {
    
    // function who generate random color
    const randomColorGenerator = () => {
        let randomNumberArray = [];
    let value = true;
    while(value){
        let random = Math.floor(Math.random() * 8)
        if(!randomNumberArray.includes(random)){
            randomNumberArray.push(random);
        }
        if(randomNumberArray.length === 8){
            value = false
        }
    }
    let basicColorArray = ['red','green','blue','black','yellow','orange','grey','brown'];
    let randomColorArray = [];
    for (let i = 0; i < 8; i++) {
        randomColorArray.push(
            basicColorArray[randomNumberArray[i]]
        )
        }
    return randomColorArray
    };

    // random color hook
    const [color, setColor] = useState(randomColorGenerator())
    
    // function who return the clicked color and generate new random color
    const clickHandler = (event) => {
        const clickColor = event.target.style.backgroundColor
        console.log(clickColor);
        setColor(randomColorGenerator())
        scoreHandler(clickColor)
    }


    // function who change props.score 
    const scoreHandler = (clickedColor) => {
        let colorScoreArray = [];
        colorScoreArray.push(clickedColor)
        props.setScore(props.score + 1)
        if (colorScoreArray.includes(clickedColor)) {
            props.setScore(0)
        }
    }

  return (
    <div className='Card'>
        <div id='0' style={{backgroundColor : `${color[0]}`}} onClick={clickHandler}>0</div>
        <div id='1' style={{backgroundColor : `${color[1]}`}} onClick={clickHandler}>1</div>
        <div id='2' style={{backgroundColor : `${color[2]}`}} onClick={clickHandler}>2</div>
        <div id='3' style={{backgroundColor : `${color[3]}`}} onClick={clickHandler}>3</div>
        <div id='4' style={{backgroundColor : `${color[4]}`}} onClick={clickHandler}>4</div>
        <div id='5' style={{backgroundColor : `${color[5]}`}} onClick={clickHandler}>5</div>
        <div id='6' style={{backgroundColor : `${color[6]}`}} onClick={clickHandler}>6</div>
        <div id='7' style={{backgroundColor : `${color[7]}`}} onClick={clickHandler}>7</div>
    </div>
  )
}

export default Card