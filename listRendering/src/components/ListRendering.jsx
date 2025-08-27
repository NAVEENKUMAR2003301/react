import React, { useState } from 'react'
import './ListRendering.css'

const ListRendering = () => {
  let [item,setItem]=useState([
    
  ])
  let [read,setRead]=useState("")
  let [isEditing,setIsEditing]=useState(false)
  let [cEle,setCEle]=useState(null)

  let handleAdd = ()=>{
   if(isEditing){
    let newItem1 = item.map((item)=>{
      return item.id === cEle ? {...item,label : read} : item
    })
    setItem(newItem1)
    setCEle(null)
    setIsEditing(false)
    setRead("")
   }else{ setItem([
      ...item,{id:item.length+1,label:read,checked:false}
    ]) }
  }

  let handleCheck =(id)=>{
    let check = item.map((item)=>{
      return item.id === id ? {...item,checked : !item.checked} : item
    })

    setItem(check)
  }

  let handleDelete = (id)=>{
    let delete1 = item.filter((item)=>{
      return item.id !== id 
    }).map((item,index)=>{
    return {id:index+1}
    })
    setItem(delete1)
  }

  let handleEdit =(id)=>{
    setIsEditing(true)
    setCEle(id)

    let update1 = item.find((item)=>{
      return item.id === id 
    })

    setRead(update1.label)

  }

  return (
    <main >

      <input 
      type="text"
      value={read}
      onChange={(e)=>{setRead(e.target.value)}}
      />
      <button onClick={handleAdd}>{isEditing ? "save" : "add"}</button>

      {item.map((item)=>{
        return (
          <li key={item.id} className='main'>
            <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)}/>
            <label>{item.label}</label>
            <button onClick={()=>handleEdit(item.id)}>edit</button>
            <button onClick={()=>handleDelete(item.id)}>delete</button>
          </li>
        )
      })}
      
    </main>
  )
}

export default ListRendering
