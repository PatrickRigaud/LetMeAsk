import '../styles/styleSala.css';
import {ExcluirPergunta} from '../components/ModalExcluirPergunta';
import React, { useState } from 'react';
import {Perguntas} from '../components/PerguntasCaixas';
import {qtdPerguntasIcon}  from '../components/qtdPerguntas';


export function Sala({nomeSala, textoPergunta, nomeUsuario}){
    
    const [openModal, setModal] = useState(false)
    

    return (
        <>
        <ExcluirPergunta isOpen={openModal} setModalOpen={() => setModal(!openModal)}/>
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{qtdPerguntasIcon()}</div>
            </div>
            <main className="centroPrincipal">
            
            <Perguntas setModal={setModal} />
            </main>
        </div>
        </>
    )
}


