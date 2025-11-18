import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor-1">
        <div className="fila-1">
          <div className="cuadro-1 bg-secondary" style={{width: "80px", height: "80px"}}  ></div>
          <div className="cuandro-2 bg-primary" style={{width: "80px", height: "80px"}}></div>
        </div>
        <div className="fila-2"></div>
      </div>
    </>
  )
}

export default App
