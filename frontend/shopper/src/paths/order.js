import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goInventory, goHome } from '../routes/coordinator'
import logo from '../assets/shopper.jpg'
import { MainBox, Img, ButtonBox, Button } from '../style/InventoryStyle'
import { Cart, TotalBox, Container, Total, Orders, ProdBox, ProTittle, ShowProducts, AdDel, Buttons, CartButton } from '../style/OrderStyle'
import { CreateOrder, GetProducts } from '../endpoints/endpoints'

export default function Order() {
    const navigate = useNavigate()
    const [ prod, setProd ] =  useState(undefined)
    const [ ord, setOrd ] = useState([])
    const [ client, setClient ] = useState("")
    const [ date, setDate ] = useState("")
    const config = {minimumFractionDigits: 2, style: "currency", currency: "BRL",}
    useEffect ( () => {
      const product = async () => { const result = await GetProducts()
        setProd(result.data.products) }
      product() }, [])

    const showProd = prod?.map((product) => {
      return <ProdBox key={product.id}>
        <ProTittle>{product.name}</ProTittle> <p>{product.price.toLocaleString( "pt-BR", config )}</p> 
        <Buttons><AdDel onClick={() => delProduct(product.id)}>-</AdDel>
        <AdDel onClick={() => addProduct(product)}>+</AdDel></Buttons>

      </ProdBox> })
    const addProduct = (product) => {
      const newProduct = [...ord]
      const verify = newProduct.findIndex((item) => {
        return item.id === product.id })
        if (newProduct[verify]?.qty < product.qty_stock || !newProduct.length || verify === -1) {
      if (verify >= 0) { newProduct[verify].qty ++ }
      else { newProduct.push({id:product.id, name: product.name, price:product.price, qty:1}) }
      setOrd(newProduct)
        } else { alert(`O produto ${product.name} atingiu a quantidade máxima em nosso estoque`)} }
    const delItem = (id) => {
      const del = ord.filter((item) => { return item.id !== id })
      setOrd(del)
    }
    const delProduct = (id) => {
      const del = ord.map((item) => {
        if (item.id === id) { return {...item, qty: item.qty -1} }
        return item }).filter((item) =>{ return item.qty > 0 })
      setOrd(del) }
   const inCart = ord.map((item) => { return <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.price.toLocaleString( "pt-BR", config )}</p>
      <p>{item.qty}</p>
      <button onClick={ () => delItem(item.id) }>Remover Todos</button>
    </div> })
  const onName = (event) => { setClient(event.target.value) }
  const onDate = (event) => { setDate(event.target.value)}

  const finalOrder = async (event) => {
    event.preventDefault()
    const products = ord.map((item) => {return {id:item.id, qty:item.qty}})
    const body = { name:client, date:date, products:products }
    if (ord.length) {
     await CreateOrder(body)
      alert(" Pedido realizado com sucesso. Obrigades por comprar conosco!")
      setClient("")
      setDate("")
      setOrd([]) }
    else {alert("O carrinho está vazio!")}
console.log(body);
  }
  const cartTotal = ord.reduce((a, b) => { return b.price * b.qty + a }, 0)
  const fixedPrice = cartTotal.toLocaleString( "pt-BR", config )
  return (
  <Container>
    <MainBox>
    <div> <Img src={logo}/> </div>
    <ButtonBox>
    <Button onClick={() => goHome(navigate)}>Home</Button>
    <Button onClick={() => goInventory(navigate)}>Estoque</Button>
    </ButtonBox>
   </MainBox>
   <Orders>
   <ShowProducts> {showProd} </ShowProducts> 
    <Cart>
      <p>Carrinho</p>
      <form onSubmit={finalOrder}>
      <input onChange={onName} placeholder={"Nome"} value={client} required/>
      <input onChange={onDate} type={"date"} min={new Date().toISOString().slice(0,10)} value={date} required/> 
      {inCart}
      <TotalBox>
      <Total>Valor Total:{fixedPrice}</Total>
      <CartButton onClick={() => {setOrd([])}} type={"button"}>Esvaziar Carrinho</CartButton>
      <CartButton type={"submit"}> Finalizar Pedido </CartButton>
      </TotalBox> </form>
    </Cart>
    </Orders>
  </Container>
  )
}
