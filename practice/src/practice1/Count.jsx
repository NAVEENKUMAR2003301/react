import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'



let Button1 = styled.button
`
width:100px;
height:30px;
background-color:green;
color:white;
`
let Button2 = styled.button
`
width:100px;
height:30px;
background-color:blue;
color:white;
`
let Button3 = styled.button
`
width:100px;
height:30px;
background-color:yellow;
color:black;
`
const Count = () => {

    let[count,setCount]=useState(0)
    let[msg,setMsg]=useState("")
    

    function clkIncrease(){
        setCount(count=>{return Number(count+1)})
        console.log(count);
        setMsg("");
        
    }
    function clkDecrease(){
        setCount(count=>{return count-1})
        setMsg("");
    }
    function text(){
       setMsg("hi there!!!")
       setCount("")
       
       
    }


  return (
    <div>
      <Button1 onClick={clkIncrease}>Increase</Button1>
      <Button2 onClick={clkDecrease}>Decrease</Button2>
      <Button3 onClick={text}>Message</Button3>
      <p>{count}{msg}</p>
    </div>
  )
}

export default Count
