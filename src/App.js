
import './App.css';
import React from 'react'
import { useEffect, useState } from 'react';
import Board from './components/Board';
import StopWatch from './components/StopWatch';

function App() {
  
  const cardImages = [
    { "src": "/img/cercle.svg", match: false },
    { "src": "/img/square.svg", match: false },
    { "src": "/img/triangle.svg", match: false }

]
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)
const [cards, setCards] = useState([])
const [time, setTime] = useState(0);
const [timerOn, setTimerOn] = useState(false);
const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTime(0)
    setTimerOn(true)
    

}
useEffect(() => {
    shuffleCards()
    setTimerOn(true)

}, [])

useEffect(()=>{
  const matched =cards.filter(card=>card.match===true)
  if(matched.length==6){
    setTimerOn(false)  }

},[cards])
  
  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <Board cards={cards} 
            setCards={setCards}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            setChoiceOne={setChoiceOne} 
            setChoiceTwo={setChoiceTwo}/> 
            <StopWatch time={time} setTime={setTime} timerOn ={timerOn} setTimerOn={setTimerOn} cards={cards}/>
      </div>
  );
}

export default App;
