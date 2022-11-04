import React from 'react'
import HOC1 from './HOC1';
import { useState } from 'react';
export default function Hoc() {
    const [count,setCount] = useState(0);
    const increment =()=>{
        setCount(count+1)
    }

  return (
    <div className='container'>
    <p><b>Higher Order Component :</b> Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>
    <ul>
      <li>Both buttons are separate components.</li>
      <li>Although they are two different comonents but they share same functional code</li>
      <li>Note that the higher order function created separate state for each wrapped component passed through them.</li>
    </ul>
    <h4>Example :</h4>
    <button  style={{backgroundColor:'blue',height:'50px',width:'400px',color:'white',fontSize:'20px'}} onMouseOver={increment} >component 1 Hoverd {count} times </button>
    <HOC1/>
    </div>
  )
}
