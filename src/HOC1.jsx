import React from 'react'
import { useState } from 'react';
export default function HOC1() {
    const [count,setCount] = useState(0);
    const increment =()=>{
        setCount(count+1)
    }

  return (
    <div className='con'>
    <button id='btn1' style={{backgroundColor:'red',height:'50px',width:'400px',color:'white',fontSize:'20px'}} onMouseOver={increment} >Component 2 Hoverd {count} times </button>
    </div>
  )
}
