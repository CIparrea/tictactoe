import React from 'react'
import './NewGame.css'

function NewGame({setModal, setScore, setWinner}) {
    function MouseOver(event) {
        event.target.id = "newGameGlow";
      }
      function MouseOut(event){
        event.target.id = "noGlow";
      }
      function newGameOn(){
        setModal(prev => !prev)
        setScore("")
        setWinner("")

      }
  return (
    <button className="newGameButton" 
        onMouseOver={MouseOver} 
        onMouseOut={MouseOut}
        onClick={newGameOn}>
        New Game
    </button>
  )
}

export default NewGame