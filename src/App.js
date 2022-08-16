import { useState } from 'react';
import './App.css';

function App() {
  const [result , setResult] = useState("")
  const submit=(e)=>{
    setResult(result.concat(e.target.value))
  }
  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
    // setResult(result.slice(0,result.length-1))
    setResult(result.slice(0,-1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString());

    }catch{
      setResult("Error")
    }

  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form action="">
        <input type="text" value={result}/>
      </form>
      <div className='Keypad'>
          <button onClick={clear}>Clear</button> 
          <button onClick={backspace}>C</button> 
          <button value={"/"} onClick={submit}>&divide;</button> 
          <button value={"+"} onClick={submit}>+</button>
          <button value={"-"} onClick={submit}>-</button>
          <button value={"*"} onClick={submit}>&times;</button> 
          <button value={"1"} onClick={submit}>1</button> 
          <button value={"2"} onClick={submit}>2</button> 
          <button value={"3"} onClick={submit}>3</button> 
          <button value={"4"}  onClick={submit}>4</button> 
          <button value={"5"}  onClick={submit}>5</button> 
          <button value={"6"} onClick={submit}>6</button> 
          <button value={"7"} onClick={submit}>7</button> 
          <button value={"8"} onClick={submit}>8</button> 
          <button value={"9"} onClick={submit}>9</button>  
          <button value={"."} onClick={submit}>.</button>  
          <button  onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
