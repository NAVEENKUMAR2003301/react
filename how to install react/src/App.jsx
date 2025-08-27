
import './App.css'


let a = "navi"
let button = document.querySelector("button")
let counter = 0
let p = document.querySelector(".p")
button.addEventListener("click",()=>{
  counter++
  p.innerText = counter
})

function App() {
  
  return (
    <>
      <h1 style={{color:"red"}}>hello</h1>
      <input type="text" />
      <p>{a}</p>
      <button>Click Me</button>
      <p className='p'>{counter}</p>
    </>
  )
}

export default App
