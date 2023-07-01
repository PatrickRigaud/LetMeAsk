import Sala from "../components/sala";
import { Header } from "../components/Header";
import React from 'react';


export function TelaSala_Screen(){

    let telaEscolhida = localStorage.getItem('id')
    let nomeTelaEscolhida = localStorage.getItem('nomeSala')
    
    return (<>
        <Header/>
        <Sala nomeSala={nomeTelaEscolhida} idSala={telaEscolhida}/>
    </>)
}