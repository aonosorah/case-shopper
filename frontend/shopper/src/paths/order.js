import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goInventory, goHome } from '../routes/coordinator'

export default function Order() {
    const navigate = useNavigate()
  return (
    <div>
    <h1>Este é o meio do fim</h1>
    <button onClick={() => goHome(navigate)}>Home</button>
    <button onClick={() => goInventory(navigate)}>Inventario</button>
    </div>
  )
}
