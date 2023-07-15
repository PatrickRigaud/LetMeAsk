import React, { useState } from 'react';
import icone_usuario from '../../assets/icone_usuario.svg'
import '../../styles/styleSala.css'
import {ExcluirPergunta} from './ModalExcluirPergunta';


export function ConteinerPergunta({textoPergunta, nomeUsuario, id, setLista, lista, atualizarQuantidadePerguntas, idSala}){

    const [openModal, setModal] = useState(false);


        return <div className="pergunta"  key={id}>
            <p className='textoPergunta'>{textoPergunta}</p>
            <footer>
                <div className="usuario">
                    <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                    <div>{nomeUsuario}</div>
                </div>
    
                <div className="icones">
                    <div className="check"></div>
                    <div className="excluir" onClick={() =>
                        setModal(true)}/>
                    <div className="messages"></div>
                </div>
            </footer>
            <ExcluirPergunta 
                isOpen={openModal}
                setModalOpen={() => setModal(!openModal)}
                id={id}
                setLista={setLista}
                lista={lista}
                encerrarItem={"Excluir pergunta"}
                confirmacaoDelete={"Tem certeza que você deseja excluir esta pergunta?"}
                atualizarQuantidadePerguntas={atualizarQuantidadePerguntas}
                comando={'excluir'}
                idSala={idSala}
            />
        </div>
        }
