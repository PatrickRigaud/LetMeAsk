import Sala from "../components/sala";
import { Header } from "../components/Header";
import React from 'react';


export function TelaSala_Screen({infoNome, infoId}){
    
    return (<>
        <Header/>
        <Sala nomeSala={infoNome} idSala={infoId}/>
    </>)
}