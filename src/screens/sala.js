import icone_usuario from '../assets/icone_usuario.svg'
import check from '../assets/checkmark-circle-1.svg'
import excluir from '../assets/Excluir.svg'
import messages from '../assets/Messages.svg'
import '../styles/styleSala.css'
import {ExcluirPergunta} from '../components/ExcluirPergunta'
import React, { useState } from 'react';





export function Sala({nomeSala, textoPergunta, nomeUsuario}){
    
    const [openModal, setModal] = useState(false)
    
    const contadorPerguntas = 2

    const listaPerguntas = [
        {id:1,
        mensagem: 'Qual a cor do céu?',
        usuario: 'Pedro'},
        {id:2,
        mensagem: 'Qual a cor do céu?',
        usuario: 'Alexandre'}
    ]

    let [lista, setLista] = useState(listaPerguntas)


    let temPergunta = ''

    if(listaPerguntas.length > 0){
        temPergunta = `${listaPerguntas.length} perguntas`
    } else{
        temPergunta = 'Sem perguntas'
    }
 

    const pergunta = (textoPergunta, nomeUsuario, id) => {
    
    return <div className="pergunta" id={id}>
        <p className='textoPergunta'>{textoPergunta}</p>
        <footer>
            <div className="usuario">
                <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                <div>{nomeUsuario}</div>
            </div>

            <div className="icones">
                <img src={check} alt="check"></img>
                <img src={excluir} alt="excluir" onClick={(e) => excluirPerguntaF(e)
                    // setModal(true)}
                }/>
                <img src={messages} alt="messages"></img>
            </div>
        </footer>
    </div>
    }
    const mapearPerguntas = lista.map((perguntaUser) => {
        return pergunta(perguntaUser.mensagem, perguntaUser.usuario, perguntaUser.id)
    })

   const excluirPerguntaF = (e) => {
    const parentElement = e.target.parentNode
    const parentElement1 =parentElement.parentNode
    const elementoAExcluir = parentElement1.parentNode.id

    const novaLista = lista.filter((elemento) => {
        return elemento.id != elementoAExcluir
    })
    
    setLista(novaLista)
   }
   
   

    return (
        <>
        <ExcluirPergunta isOpen={openModal} setModalOpen={() => setModal(!openModal)}/>
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{temPergunta}</div>
            </div>
            <main className="centroPrincipal">
            
            {mapearPerguntas}
            </main>
        </div>
        </>
    )
}


