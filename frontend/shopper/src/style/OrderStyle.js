import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
font-family:'Trebuchet MS';
`
export const Orders = styled.div`
display: flex;
`
export const Cart = styled.div`
border: 3px #3d3d5e solid;
width: 300px;
height: 450px;
overflow: auto;
`
export const ProdBox = styled.div`
width: 200px;
background-color: #6d597a;
border-radius: 10px;
margin: 5px;
`
export const ShowProducts = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 15px;
width: 70vw;
`
export const ProTittle = styled.p`
font-weight: bold;
height: 60px;
font-size: 15px;
margin: 3px;
color: white;
`
export const AdDel = styled.button`
border: none;
border-radius: 100px;
width: 20px;
height: 20px;
`
export const Buttons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 5px;
`
export const CartButton = styled.button`
border: none;
background-color: #3d3d5e;
color:white;
width: 150px;
height: 25px;
border-radius: 10px;
margin: 5px;
`
export const Total = styled.p`
font-size: 15px;
`
export const TotalBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`