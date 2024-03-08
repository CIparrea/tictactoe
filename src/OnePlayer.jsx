import CalculateWinner from "./CalculateWinner"
import CheckIfTie from "./CalculateTie"

export default function OnePlayer({squares,i,setSquares,setIsX,setModal,isX, setScore, setWinner}){
  let turn = 0;
  if (squares[i] === null) {
    squares[i] = "X";
    console.log("square is empty my turn");
  } else {
    return;
  }
  if (CalculateWinner(squares)) {
    setModal((prev) => !prev);
    console.log("win");
    setScore("Wins");
    setWinner("X");
    return;
  }

  if (CheckIfTie(squares)) {
    setModal((prev) => !prev);
    console.log("tie");
    setScore("Tie");
    return;
  }
  setSquares(squares);
  setIsX((prevIsX) => !prevIsX);
  console.log(isX);
  turn = 1;

  let randomNumber = "";
  while (randomNumber === "") {
    randomNumber = Math.floor(Math.random() * 9);
    if (squares[randomNumber] === null) {
      setTimeout(() => {
        console.log("Delayed for 1 second.");
        squares[randomNumber] = "O";
        setIsX((prevIsX) => !prevIsX);

        if (CalculateWinner(squares)) {
          setModal((prev) => !prev);
          console.log("win");
          setScore("Wins");
          setWinner("O");
          return;
        }
      }, "600");
    } else {
      randomNumber = "";
    }
  }
  console.log("this should come after the delay, but it doesnt ");
}