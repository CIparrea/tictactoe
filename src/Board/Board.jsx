import './Board.css';
import Square from '../Square/Square.jsx'
import OnePlayer from '../OnePlayer.jsx';
import TwoPlayer from '../TwoPlayer.jsx';

function Board({isX, setIsX, setModal, player, squares, setSquares, setScore, setWinner}){
    const handleClick = (i) =>{
        
        if(player === "two"){
            TwoPlayer({squares,i,setSquares,setIsX,setModal,isX, setScore, setWinner})
            setIsX((prevIsX) => !prevIsX);
        }

        if(player === "one"){
            OnePlayer({squares,i,setSquares,setIsX,setModal,isX, setScore, setWinner})
        }
    }       

    return(
        <>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>
    <div className="board" >
        <div className="row" id="topRow">
            <Square value={squares[0]} onclick={() => handleClick(0)} />
            <Square value={squares[1]} onclick={() => handleClick(1)} />
            <Square value={squares[2]} onclick={() => handleClick(2)} />
        </div>   
        <div className="row" id="middleRow">
            <Square value={squares[3]} onclick={() => handleClick(3)} />
            <Square value={squares[4]} onclick={() => handleClick(4)} />
            <Square value={squares[5]} onclick={() => handleClick(5)} />
        </div>
        <div className="row" id="bottomRow">
            <Square value={squares[6]} onclick={() => handleClick(6)} />
            <Square value={squares[7]} onclick={() => handleClick(7)} />
            <Square value={squares[8]} onclick={() => handleClick(8)} />
        </div>
    </div>
    </>
)}

export default Board


