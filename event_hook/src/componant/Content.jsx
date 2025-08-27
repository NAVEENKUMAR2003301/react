import React from 'react'

const Content = () => {
    function add(e){
        console.log('add');
        console.log(e.target.innerText);
        for (let i = 0; i < 10; i++) {
            console.log(i); }
        
    }
  return (
    <div>
        <p>This is the content component.</p>
        <button onClick={(e)=>{add(e)}}>click me</button>
        
    </div>
  )
}

export default Content
