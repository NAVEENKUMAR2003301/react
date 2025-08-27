import React from 'react'

let Cont = {
  color: 'red',
  fontSize: '20px',
  textAlign: 'center',
  margin: '20px',
  padding: '10px',
}
const content = (props) => {
  
  console.log(props);
  
    return (
      <>
        <main className='content'>
          <h1 style={{ color: 'blue', fontSize: '24px' }}>content</h1>
          <h2 style={Cont}>gfffff</h2>
        </main>
      </>
    );
}

export default content
