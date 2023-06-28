import TelaSala from "../components/perguntas/sala"
import { Header } from "../components/Header";
import React from 'react';


export function TelaScreen(){

    let telaEscolhida = localStorage.getItem('id')
    let nomeTelaEscolhida = localStorage.getItem('nomeSala')
    
    return (<>
        <Header/>
        <TelaSala nomeSala={nomeTelaEscolhida} idSala={telaEscolhida}/>
    </>)
}