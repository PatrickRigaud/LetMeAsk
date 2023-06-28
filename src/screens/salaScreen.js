import TelaSala from "../components/perguntas/sala"
import { Header } from "../components/Header";
import React from 'react';


export function TelaScreen(){

    let telaEscolhida = localStorage.getItem('id')
    
    return (<>
        <Header/>
        <TelaSala nomeSala="Descarga/Defesa" idSala={telaEscolhida}/>
    </>)
}