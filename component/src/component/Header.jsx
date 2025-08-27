import React from 'react'
import styled from 'styled-components'




const HeaderContainer = styled.header
`  background-color: #f8f9fa;
  padding: 20px;`

  let King = styled(HeaderContainer)
  `color: red;
  font-size: 24px;`
const Header = (props) => {
    console.log(props);
    
  return (
    <>
    <HeaderContainer>click</HeaderContainer>
      <h1>header</h1> 
      <King>hello00000000000000000000000000</King>
    </>
  )
}

export default Header
