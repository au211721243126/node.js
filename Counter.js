import React from 'react'

function Counter() {
    let count =10;

    const handleAdd=()=>{
        console.log("+ clicked");
    }

    const handleSub=()=>{
        console.log("- clicked");
    }

  return (
    <div>
    <h2>Counter</h2>
    <h3>0</h3>
    <button onClick={handleSub} style={{padding:8,backgroundColor:"#045590",margin:4,color:"white"}}>-</button>
    <button onClick={handleAdd} style={{padding:8,backgroundColor:"#045590",margin:4,color:"white"}}>+</button>
    </div>
  )
}

export default Counter