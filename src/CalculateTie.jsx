export default function CheckIfTie(squares){
        let filled = true;
        squares.forEach((square)=>{
            if(typeof(square) === "object"){
                filled = false;
            }
        }
        )
        if(filled){
            return "tie"
        }
    }