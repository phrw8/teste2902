import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome,setNome]=useState("")
  const [descricao,setDescricao]=useState("")

  const handleSubmit=()=>{
    const data={
      nome,
      descricao
    }
  }

  return (
    <>
      <form action="">
        <input type="text" placeholder='nome' onChange={(e)=>setNome(e.target.value)} value={nome}/>
        <input type="text" placeholder='descricao' onChange={(e)=>setDescricao(e.target.value)} value={descricao}/>
      </form>
    </>
  )
}

export default App
