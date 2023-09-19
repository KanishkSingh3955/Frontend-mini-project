import { useState } from 'react'

import './App.css'

function App() {
  const [count , setCount] = useState(0);
  
  const incerement= ()=>{
    setCount(count+1);
  }
  const decerement = () =>{
    if(count > 0){
      setCount ( count - 1) ;
    }
   
  }
  return (
    <>
       <h1>Counter App</h1>
       <button onClick={incerement}>+</button>
        <h2>{count}</h2>
       <button onClick={decerement}>-</button>

    </>
  )
}

export default App
