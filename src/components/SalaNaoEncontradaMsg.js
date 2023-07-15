import styled from "styled-components";

const P = styled.p`
margin: 0px 75px 0 75px;
color: rgba(255, 0, 0, 0.685);
display: ${props => props.visivel ? 'block' : 'none'};
`

export function SalaNaoEncontrada({visivel}){

    return (<>
        <P className="salaNaoEncontrada" visivel={visivel}>Sala não encontrada!</P>
    </>)
}