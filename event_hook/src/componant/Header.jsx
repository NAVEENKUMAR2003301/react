import React from 'react'
import { useState } from 'react'

const Header = () => {
    let [ex,setEx] = useState(0)
   
    
    let [count,setCount] = useState(0)
    function clickIncrease() {setCount(count+1) 
              setEx((ex) => ex + 1);

    }
    function clickDecrease() {setCount(count-1)}

    // switch 

    let [data,setData] = useState('error')


    let displayed =()=>{
      switch(data){
        case 'loading':return <Load/> ;break;
        case 'success':return <Success/> ;break;
        case 'error':return <Error/> ;break;
      }

    }


    function Load(){
      return(
        <h1>loading</h1>
        
      )
    }
    function Success(){
      return(
        <h1>success</h1>
      )
    }
    function Error(){
      return(
        <h1>Error</h1>
      )
    }
  return (
    <div>
       <h1>counter App - {count} - {ex}</h1>
       <button onClick={clickIncrease} >increase</button>
       <button onClick={clickDecrease}>Decrease</button>
       {displayed()}
    </div>
  )
}

export default Header
