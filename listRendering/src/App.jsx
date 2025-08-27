import React from 'react'
import Header from './components/Header'
import ListRendering from './components/ListRendering'
import Footer from './components/Footer'
import './app.css'
const App = () => {
  return (
    <div className='appBody'>
      <Header/>
      <ListRendering/>
      <Footer/>
    </div>
  )
}

export default App
