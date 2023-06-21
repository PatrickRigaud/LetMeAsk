import TelaSala from "../components/perguntas/sala"
import React from 'react'
import { Header } from "../components/Header";


export function TelaScreen(){
    return (<>
        <Header/>
        <TelaSala nomeSala="Descarga/Defesa" idSala={1}/>
    </>)
}