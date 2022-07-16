import React, { useState, useEffect } from 'react'

const Card = (props) => {
    
    const CreateCard = () => {
        for (let index = 0; index < 8; index++) {
            return (
                <div>{index}</div>
                )
            }
        }
        
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
    
    const [color, setColor] = useState(randomColorGenerator())

  return (
    <div>
        <CreateCard/>
        <div>{color[0]}</div>
        <div>{color[1]}</div>
        <div></div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
  )
}

export default Card