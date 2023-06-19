import React, { useState } from 'react';
import icone_usuario from '../assets/icone_usuario.svg'
import check from '../assets/checkmark-circle-1.svg'
import excluir from '../assets/Excluir.svg'
import messages from '../assets/Messages.svg'
import '../styles/styleSala.css'
import {listaPerguntas} from '../bancoPerguntas/bancoPerguntas'

export function Perguntas({setModal}){

    let [lista, setLista] = useState(listaPerguntas)


    const pergunta = (textoPergunta, nomeUsuario, id) => {
    
        return <div className="pergunta" key={id}>
            <p className='textoPergunta'>{textoPergunta}</p>
            <footer>
                <div className="usuario">
                    <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                    <div>{nomeUsuario}</div>
                </div>
    
                <div className="icones">
                    <img src={check} alt="check"></img>
                    <img src={excluir} alt="excluir" onClick={() => setModal(true)}/>
                    <img src={messages} alt="messages"></img>
                </div>
            </footer>
        </div>
        }

   const mapearPerguntas = lista.map((perguntaUser) => {
    return pergunta(perguntaUser.mensagem, perguntaUser.usuario, perguntaUser.id)
})
    
    return (
        <>{mapearPerguntas}</>
    )

}