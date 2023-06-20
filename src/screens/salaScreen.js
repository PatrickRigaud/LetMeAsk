import TelaSala from "../components/sala"
import React from 'react'
import { Header } from "../components/Header";


export function TelaScreen(){
    return (<>
        <Header/>
        <TelaSala nomeSala="Descarga/Defesa" />
    </>)
}