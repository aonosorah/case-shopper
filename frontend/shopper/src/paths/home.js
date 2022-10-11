import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goInventory, goOrder } from '../routes/coordinator'
import logo  from '../assets/shopper.png'
import { MainBox, ImgBox, ButtonBox, Button } from '../style/HomeStyle'

export default function Home() {
    const navigate = useNavigate()
  return (
    <MainBox>
      <ImgBox>
        <img src={logo}/>
      </ImgBox>
       <ButtonBox>
        <Button onClick={() => goOrder(navigate)}>Pedidos</Button>
        <Button onClick={() => goInventory(navigate)}>Inventario</Button>
      </ButtonBox>
    
    </MainBox>
  )
}
