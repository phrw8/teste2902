import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useFetch} from './components/hooks/useFetch'
import './App.css'
function App() {
  const [nome,setNome]=useState("")
  const [descricao,setDescricao]=useState("")


  const handleSubmit= async (e)=>{
    const data={
      nome,
      descricao
    }
    e.preventDefault();

    // Enviar dados para o servidor usando fetch ou axios
    try {
      const response = await fetch('http://localhost:5050/registra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
    }
  }
  const {data}=useFetch("http://localhost:5050/")

  return (
    
    <>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='nome' onChange={(e)=>setNome(e.target.value)} value={nome}/>
        <input type="text" placeholder='descricao' onChange={(e)=>setDescricao(e.target.value)} value={descricao}/>
        <button type='submit'>Enviar</button>
      </form>
      {data.map((item)=>{
        <div className="">
          <p>{data.nome}</p>
          <p>{data.descricao}</p>
        </div>
      })}
    </>
  )
}

export default App
