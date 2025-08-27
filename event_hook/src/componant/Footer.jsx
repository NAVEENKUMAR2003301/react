import React, { useState } from 'react'
import styled from 'styled-components'

let UButton = styled.button
`
  background-color:#4CAF50;
  width: 100px;
  color: white;`

const Footer = () => {
    let [count,setCount] = useState(0)
    function clkIncrease() {
        setCount(count => count+1)
    }
  return (
    <div>
       <h1>rewards - {count}</h1>
       <UButton onClick={clkIncrease}>click me</UButton>
       {count>=20 && <p>master</p>}
       {count>=10 ? (
         <p>good</p>
       ) : (
         <p>keep trying</p>
       )}
    </div>
  )
}

export default Footer
