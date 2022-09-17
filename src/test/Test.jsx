import { useAnimation, useTime } from 'framer-motion';
import React from 'react'
import { useState } from 'react';

export default function Test() {

    function handleClick(e){
        
        
    }

    function handleKeyDown(e){
        
        // console.log(e);
    }

    const [email, setEmail] = useState("")

    


  return (

    <>
    <div onClick={handleClick} style ={{border:"3px solid red ", margin:"20px", padding:"20px"}}>
      Test
      <input onKeyDown={handleKeyDown} type={"text"} placeholder={"ingrese su nombre"}/>
      <input  type={"number"} placeholder={"ingrese su numero"}/>
      <input type={'email'} value={email} onChange={

        (e) => {
            
            setEmail(e.target.value)
        }} 
         placeholder={'ingrese su email'} />
      <br/>
      <br/>

      <button>Enviar</button>
    </div>
    
    </>
  );
}
