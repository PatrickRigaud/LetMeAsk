import "../../styles/styleGrupoSalas.css"
import { Link } from 'react-router-dom'
import { nomeSalaContext, iDSalaContext } from "../../context/context";
import React, { useContext, useEffect, useState } from 'react';


export function ConteinerSalaPainelGrupo({nomeSala, id}){
    let token = localStorage.getItem('token');

    const setNome = useContext(nomeSalaContext);
    const setId = useContext(iDSalaContext);
    const [qtdPerguntas, setQtdPerguntas] = useState('')

useEffect(() => {
  async function fetchQuantidadePergunta() {
    fetch('http://localhost:4000/askFilterID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ 
    data: id}),
})
  .then(response => response.json()) 
  .then(data => {
    setQtdPerguntas(data)
  })
  .catch(error => {
    console.error('Erro:', error);
  });

}
fetchQuantidadePergunta();
}, [])
 
    return (<>
        <Link to={`/sala`} className="link" onClick={()=>{
            setNome(nomeSala)
            setId(id)
        }}>
            <div className="blocoSala">
                <h3 className="nomeSala">{`${nomeSala} - ID: ${id}`}</h3>
                <div className="quantidadePerguntasSala">{`${qtdPerguntas.length} perguntas`}</div>
            </div>
        </Link>
    </>)
}