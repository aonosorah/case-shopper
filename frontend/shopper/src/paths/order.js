import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goInventory, goHome } from '../routes/coordinator'
import logo from '../assets/shopper.jpg'
import { MainBox, Img, ButtonBox, Button } from '../style/InventoryStyle'

export default function Order() {
    const navigate = useNavigate()
  return (
  <>
    <MainBox>
    <div>
      <Img src={logo}/>
    </div>
    <ButtonBox>
    <Button onClick={() => goHome(navigate)}>Home</Button>
    <Button onClick={() => goInventory(navigate)}>Estoque</Button>
    </ButtonBox>
   </MainBox>
  </>
  )
}
