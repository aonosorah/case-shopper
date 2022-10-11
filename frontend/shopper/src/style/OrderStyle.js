import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 100vw;
max-height: 100vh;
font-family:'Trebuchet MS';
background-color: whitesmoke;

`
export const Orders = styled.div`
display: flex;
`
export const Cart = styled.div`
border: 3px #3d3d5e solid;
width: 300px;
height:calc( 100vh - 106px);
overflow: auto;
margin-right: 20px;
border-radius: 10px;
position: sticky;
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #3d3d5e; }
::-webkit-scrollbar-thumb { background: #3d3d5e; }
::-webkit-scrollbar-thumb:hover { background: #3d3d5e; }
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
max-height: calc(100vh - 100px);
flex-grow: 1;
overflow: auto;
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #FFFFFF; }
::-webkit-scrollbar-thumb { background: #FFFFFF; }
::-webkit-scrollbar-thumb:hover { background: #FFFFFF; }
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
export const Input = styled.input`
width: 250px;
height: 25px ;
border: none;
margin-bottom: 5px;
border-radius: 10px;
`
export const Form = styled.form`
margin: 25px;
`
export const CartTittle = styled.p`
font-weight: bold;
font-size: medium;
margin-left: 10px;
`
export const Label = styled.label`
font-size: small;
`
export const PCart = styled.p`
font-size: small;
`
export const LineCart = styled.div`
display: flex;
justify-content: space-between;
`
export const RemButton = styled.button`
border: none;
background-color: #03AA77;
height: 30px;
border-radius: 10px;
`