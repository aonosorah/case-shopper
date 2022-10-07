import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goOrder, goHome } from '../routes/coordinator'
import logo from '../assets/shopper.jpg'
import { MainBox, H3, Img, ButtonBox, PProduct, PTitle, Qty, Name, Button, ProductBox, Table } from '../style/InventoryStyle'
import { GetProducts } from '../endpoints/endpoints'

export default function Inventory() {
    const navigate = useNavigate()
    const [ item, setItem ] = useState(undefined)
    useEffect ( () => {
    const product = async () => {
      const result = await GetProducts()
      setItem(result.data.products)
    }
    product()
    }, [])
    const showProduct = item?.map((product) => {
      return <Table key={product.id}>
        <Name><PProduct>{product.name}</PProduct></Name>
        <Qty><PProduct>{product.qty_stock}</PProduct></Qty>
      </Table>
    })
 console.log(item)
    return (
    <>
    <MainBox>
    <div> <Img src={logo}/> </div>
    <ButtonBox>
    <Button onClick={() => goHome(navigate)}>Home</Button>
    <Button onClick={() => goOrder(navigate)}>Pedidos</Button>
    </ButtonBox>
   </MainBox>
   <ProductBox>
    <H3> Lista de Produtos </H3>
    <Table>
      <Name><PTitle>PRODUTOS</PTitle></Name>
      <Qty><PTitle>QUANTIDADE</PTitle></Qty>
      
    </Table>
      {showProduct}
   </ProductBox>
   </>
  )
}
