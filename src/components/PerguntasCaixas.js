import React, { useState } from 'react';
import icone_usuario from '../assets/icone_usuario.svg'
import check from '../assets/checkmark-circle-1.svg'
import excluir from '../assets/Excluir.svg'
import messages from '../assets/Messages.svg'
import '../styles/styleSala.css'
import {ExcluirPergunta} from '../components/ModalExcluirPergunta';


export function Perguntas({textoPergunta, nomeUsuario, id, setLista, lista}){

    const [openModal, setModal] = useState(false);
        
        return <div className="pergunta"  key={id}>
            <p className='textoPergunta'>{textoPergunta}</p>
            <footer>
                <div className="usuario">
                    <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                    <div>{nomeUsuario}</div>
                </div>
    
                <div className="icones">
                    <img src={check} alt="check"></img>
                    <img src={excluir} alt="excluir" onClick={() =>
                        setModal(true)}/>
                    <img src={messages} alt="messages"></img>
                </div>
            </footer>
            <ExcluirPergunta 
                isOpen={openModal}
                setModalOpen={() => setModal(!openModal)}
                id={id}
                setLista={setLista}
                lista={lista}
            />
        </div>
        }
