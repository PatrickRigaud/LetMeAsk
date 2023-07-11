import "../../styles/styleGrupoSalas.css"
import { Link } from 'react-router-dom'
import { nomeSalaContext, iDSalaContext } from "../../context/context";
import React, { useContext } from 'react';


export function ConteinerSalaPainelGrupo({nomeSala, id}){

    const setNome = useContext(nomeSalaContext);
    const setId = useContext(iDSalaContext);
 
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