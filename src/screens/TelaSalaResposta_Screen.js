import { ConteinerRespostas } from "../components/Respostas/ConteinerRespostas";
import { Header } from "../components/Header";
import React from 'react';


export function TelaSalaResposta_Screen({infoNome, infoId, IdPergunta}){
    
    return (<>
        <Header/>
        <ConteinerRespostas infoNome={infoNome} infoId={infoId} IdPergunta={IdPergunta}/>
    </>)
}