import CalculateWinner from "./CalculateWinner"
import CheckIfTie from "./CalculateTie"

export default function TwoPlayer({squares,i,setSquares,setIsX,setModal,isX,setScore,setWinner}){
    if (squares[i] === null) {
      squares[i] = isX ? "X" : "O";
    } else {
      return;
    }

    setSquares(squares);

    if (CalculateWinner(squares)) {
      setModal((prev) => !prev);
      console.log("win");
      setScore("Wins");
      setWinner(isX ? "X" : "O");
      return;
    }

    if (CheckIfTie(squares)) {
      setModal((prev) => !prev);
      console.log("tie");
      setScore("Tie");
      return;
    }
}