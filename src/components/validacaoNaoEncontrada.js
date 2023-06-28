import '../styles/styleTelaLogin.css'
import { useState } from 'react'
import styled from "styled-components"

const P = styled.p`
margin: 0;
color: rgba(255, 0, 0, 0.685);
display: ${props => props.visivel ? 'block' : 'none'};
`


export default function SalaNaoEncontrada({exibirMsg}){

   
    const [visivel, setVisivel] = useState(false)
   
    if(exibirMsg){
        setVisivel(exibirMsg)
    }
    

    return (<>
        <P className="salaNaoEncontrada" visivel={visivel}>Sala não encontrada!</P>
    </>)
}