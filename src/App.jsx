import { useEffect, useState } from "react";
import "./App.css";
import CellComponent from "./components/CellComponent";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  //ko igra prvi
  const [firstGo, setFirstGo] = useState("circle");
  //pobednik
  const [winner, setWinner] = useState(null);
  
  let checkArray = cells.every((cell)=> cell !== '')

  useEffect(() => {
    console.log(cells);
    checkWinner()
  }, [cells]);

  function checkWinner(){
    let winnerCombination = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    winnerCombination.forEach(comb=>{
      let crossWinner = comb.every((cell)=>cells[cell] === 'cross')
      let circleWinner = comb.every((cell)=>cells[cell] === 'circle')

      if(crossWinner){
        setWinner('Winner is Cross!!')
        return
      }else if(circleWinner){
        setWinner('Winner is Circle')
        return
      }else if(checkArray){
        setWinner('Nema pobednika')
      }
    })
  }

  function handleResetGame() {
    if (winner || checkArray) {
      let emptyArray = new Array(9).fill('');
      setCells(emptyArray);
      setWinner(null);
    }
  }
  

  return (
    <div className="app">
      <h1 className="title">X/O Game</h1>
      <div className="squareContainer">
        {cells.map((cel, index) => {
          return (
            <CellComponent
              key={index}
              id={index}
              cel={cel}
              cells={cells}
              setCells={setCells}
              firstGo={firstGo}
              setFirstGo={setFirstGo}
              winner={winner}
            />
          );
        })}
        <button onClick={handleResetGame}>Reset Game</button>
        {winner && <h2>{winner}</h2>}
      </div>
    </div>
  );
}

export default App;
