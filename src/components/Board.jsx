import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'
const Board = ({ cards,setCards,choiceOne,choiceTwo,setChoiceOne,setChoiceTwo }) => {
    
    const [disabled, setDisabled] = useState(false)
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    const resetChoices = () =>{
        setChoiceOne(null)
        setChoiceTwo(null)
        setDisabled(false)
    }
    useEffect(()=>{
        if(choiceOne&&choiceTwo){
            setDisabled(true)
            if(choiceOne.src===choiceTwo.src){
                setCards(prevCards=>{
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src){
                            return{...card, match:true}
                        } else {
                            return card
                        }
                    })
                })
                setTimeout(()=> resetChoices(),1000)
            } else{
                setTimeout(()=> resetChoices(),1000)
            }
        }
    } 
    ,[choiceOne,choiceTwo])
    
    return (
        <div className="board">
            {cards.map(card => {
                return <Card key={card.id} 
                card={card} 
                flipped={card === choiceOne || card === choiceTwo || card.match} 
                disabled = {disabled}
                handleChoice={handleChoice} />
            })}
        </div>
    )
}

export default Board