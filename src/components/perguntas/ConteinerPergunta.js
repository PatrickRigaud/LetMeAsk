import React, { useState, useContext } from 'react';
import icone_usuario from '../../assets/icone_usuario.svg'
import '../../styles/styleSala.css'
import {ExcluirPergunta} from './ModalExcluirPergunta';
import { Link } from 'react-router-dom'
import { iDPerguntaContext } from '../../context/context';




export function ConteinerPergunta({textoPergunta, nomeUsuario, id, setLista, lista, atualizarQuantidadePerguntas, idSala}){

    const [openModal, setModal] = useState(false);

    const setIdPergunta = useContext(iDPerguntaContext);

        return <div className="pergunta"  key={id} >
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

                            <Link to={`/salaRespostas/${idSala}/${id}`}>
                                <div className="messages" onClick={() => setIdPergunta(id)}></div>
                            </Link>
                      
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
