import React, { useState } from 'react';

export default function Counter({className}) {
    const [count, setCount] = useState(1);

    const incrementCount = ()=>{
        if(count < 10){
            setCount(count => count+1);
        }
    }

    const decrementCount = ()=>{
        if(count > 1){
            setCount(count => count-1);
        }
    }

    const handleInputChange = (event)=>{
        const ip = parseInt(event.target.value) || 0;
        setCount(ip);
    }

    return (
        <div className={className} style={{height:"", display:"flex", color:"#34495E", fontWeight:"bolder", fontSize:"2em"}}>
            <button className='text-center rounded' style={{border:"0.5px solid gray", width:"50px"}} onClick={decrementCount}>-</button>
            <input className='mx-2 text-center' type="text" value={count || ""} onChange={handleInputChange} style={{width:"60px", fontSize:"1.5rem", color:"#34495E"}} />
            <button className='text-center rounded' style={{border:"0.5px solid gray", width:"50px"}} onClick={incrementCount}>+</button>
        </div>
    )
}
