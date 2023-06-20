import '../styles/styleSala.css';
import React, { useState } from 'react';
import {Perguntas} from '../components/PerguntasCaixas';
import {qtdPerguntasIcon}  from '../components/qtdPerguntas';
import { listaPerguntas } from '../bancoPerguntas/bancoPerguntas';

export function Sala({nomeSala, textoPergunta, nomeUsuario}){

    
    
  
    let [lista, setLista] = useState(listaPerguntas);

    const mapearPerguntas = lista.map((perguntaUser) => {
        return <Perguntas
      textoPergunta={perguntaUser.mensagem}
      nomeUsuario={perguntaUser.usuario}
      id={perguntaUser.id}
      setLista={setLista}
      lista={lista}
    />
    })


    return (
        <>
        
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{qtdPerguntasIcon()}</div>
            </div>
            <main className="centroPrincipal">
            
            <>{mapearPerguntas}</>
            
            </main>
        </div>
        </>
    )
}


