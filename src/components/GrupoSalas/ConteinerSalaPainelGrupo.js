import "../../styles/styleGrupoSalas.css"
import { Link } from 'react-router-dom'
import { nomeSalaContext, iDSalaContext } from "../../context/context";
import React, { useContext } from 'react';


export function ConteinerSalaPainelGrupo({nomeSala, id}){

    const setNome = useContext(nomeSalaContext);
    const setId = useContext(iDSalaContext);

    fetch('http://localhost:4000/askFilterID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: id }), // Converte o objeto para uma string JSON
})
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    // Aqui você pode lidar com a resposta do back-end
    console.log(data);
  })
  .catch(error => {
    // Lida com erros caso ocorra algum problema na requisição
    console.error('Erro:', error);
  });

 
    return (<>
        <Link to={`/sala`} className="link" onClick={()=>{
            setNome(nomeSala)
            setId(id)
        }}>
            <div className="blocoSala">
                <h3 className="nomeSala">{`${nomeSala} - ID: ${id}`}</h3>
                {/* <div className="quantidadePerguntasSala">{`${quantidadePerguntasSala.length} perguntas`}</div> */}
            </div>
        </Link>
    </>)
}