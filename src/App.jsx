import './App.css';
import Title from './Title/Title.jsx';
import Board from './Board/Board.jsx';
import NewGame from './NewGame/NewGame.jsx';
import {useState, useEffect } from "react";
import confetti from 'canvas-confetti';


function App() {
  const [modal, setModal] = useState(true);
  const [isX, setIsX] = useState(true);
  const [player, setPlayer] = useState("none");
  const [squares, setSquares] = useState (Array(9).fill(null));
  const [score, setScore] = useState("")
  const [winner, setWinner] = useState("")


  useEffect(()=>{
    if(modal){
    if(score==="Wins"){
      if(winner==="X"){
        confetti({colors: ["ffffff","0000ff"]})
      }
      if(winner==="O"){
        confetti({colors: ["ffffff","ff0000"]})
      }
    }
    if(score==="Tie"){
      confetti({colors: ["0000ff","ff0000"]})
    }
  }
  },[modal]);

  return (
    <div className="App">
      <Title />
      <Board 
        isX={isX} 
        setIsX={setIsX} 
        setModal={setModal} 
        player={player} 
        squares={squares} 
        setSquares={setSquares} 
        setScore={setScore}
        setWinner={setWinner}/>
      <div className="turnTracker" id={player}>
      <div className="currentTurnTracker" id={isX? "X" : "O"}>{isX? "X" : "O"}</div>
      <div className="textTurnTracker">'s TURN</div>
      </div>
      <NewGame setModal={setModal} setScore={setScore} setWinner={setWinner}/>
      {modal && (
        <div className="modal-container">
          <Title />
          <div className="score">
            <div className="scoreLeft" id={score==="Tie"? "X" : winner}>{score==="Tie"? "X" : winner}</div>
            <div className="scoreResult">{score}</div>
            <div className="scoreRight" id={score==="Tie"? "O" : ""}>{score==="Tie"? "O" : ""}</div>
          </div>
          <div className="players">
            <button className="onePlayer" 
              onClick={(onePlayers)}
              onMouseOver={MouseOverOne} 
              onMouseOut={MouseOut}>
                1 Player
            </button>
            <button className="twoPlayers" 
              onClick={(twoPlayers)}
              onMouseOver={MouseOverTwo} 
              onMouseOut={MouseOut}>
                2 Players
            </button>
          </div>
          <a href="https://github.com/CIparrea" target="_blank">
          <div className="gitHub">
            Cesar Iparrea's Github
            </div>

          </a>
        </div>
      )}
    </div>
  );

  function twoPlayers(){
    setModal(false);
    setPlayer("two");
    handleRestart();
    setIsX(true)
  }

  function onePlayers(){
    setModal(false);
    setPlayer("one");
    handleRestart();
    setIsX(true)
  }

  function handleRestart(){
    setSquares(Array(9).fill(null));
    setIsX(true)
  }

  function MouseOverOne(event) {
    event.target.id = "onePlayerGlow";
  }
  function MouseOverTwo(event) {
    event.target.id = "twoPlayersGlow";
  }
  function MouseOut(event){
    event.target.id = "playerNoGlow";
  }
}

export default App;


