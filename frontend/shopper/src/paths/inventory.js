import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goOrder, goHome } from '../routes/coordinator'
import logo from '../assets/shopper.png'
import { MainBox, H3, Img, ButtonBox, PProduct, PTitle, Name, Button, ProductBox, Table } from '../style/InventoryStyle'
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
      return  <Name key={product.id}><PProduct>{product.name}</PProduct>
        <PProduct>{product.qty_stock}</PProduct></Name> 
     
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
    <H3> ESTOQUE </H3>
    <Table>
      <thead><Name><PTitle>PRODUTOS</PTitle>
      <PTitle>QUANTIDADE</PTitle></Name></thead>
      <tbody>{showProduct}</tbody>
      
    </Table>
      
   </ProductBox>
   </>
  )
}
