import React from 'react'
import '../card.css'
const Card = ({card,handleChoice,flipped,disabled}) => {
    const handleClick = () =>{
        if(!disabled) {
            handleChoice(card)
        }
        
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped":""}>
                <img className="front" src={card.src} alt="card front" />
                <img className='back' src="/img/background.svg" onClick={handleClick} alt="back" />
            </div>
        </div>
    )
}

export default Card