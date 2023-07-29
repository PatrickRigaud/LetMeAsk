import Sala from "../components/sala";
import { Header } from "../components/Header";
import React from 'react';


export function TelaSala_Screen({infoNome, infoId, nomeUsuario, sobrenomeUsuario}){
    
    return (<>
        <Header/>
        <Sala nomeSala={infoNome} idSala={infoId} nomeUsuario={nomeUsuario} sobrenomeUsuario={sobrenomeUsuario}/>
    </>)
}