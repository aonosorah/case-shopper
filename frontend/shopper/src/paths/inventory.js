import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goOrder, goHome } from '../routes/coordinator'

export default function Inventory() {
    const navigate = useNavigate()
  return (
    <div>
    <h1>Este é o fim do fim</h1>
    <button onClick={() => goHome(navigate)}>Home</button>
    <button onClick={() => goOrder(navigate)}>Pedidos</button>
    </div>
  )
}
