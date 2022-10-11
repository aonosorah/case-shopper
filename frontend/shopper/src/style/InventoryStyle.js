import styled from 'styled-components'

export const MainBox = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
font-family:'Trebuchet MS';
height: 100px;
`
export const ButtonBox = styled.div`
display: flex;
justify-content: flex-end;
`
export const Img = styled.img`
width:60px;
height: 60px;
`
export const Button = styled.button`
border: none;
background-color: #03AA77;
width: 60px;
height: 60px;
border-radius: 100px;
margin-right: 5px;
font-family:'Trebuchet MS';
color: white;
`
export const ProductBox = styled.div`
display: flex;
flex-direction: column;
`
export const Table = styled.table`
margin: 0 auto;
width: 600px;
max-width: 100%;
padding: 3px;

color: white;
`
export const Name = styled.tr`
background-color: #3d3d5e;

`
export const PTitle = styled.th`
margin: 5px;
padding: 2px;
font-weight: bold;
border-radius: 10px;
font-family:'Trebuchet MS';
`

export const PProduct = styled.td`
margin: 5px;
border-radius: 10px;
padding: 2px 20px;
font-family:'Trebuchet MS';
`
export const H3 = styled.h3`
margin-left: 150px;
font-family:'Trebuchet MS';
`