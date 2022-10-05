import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goInventory, goOrder } from '../routes/coordinator'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Este é o começo do fim</h1>
    <button onClick={() => goOrder(navigate)}>Pedidos</button>
    <button onClick={() => goInventory(navigate)}>Inventario</button>
    </div>
  )
}
