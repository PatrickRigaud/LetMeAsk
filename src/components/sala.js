import '../styles/styleSala.css';
import React, { useState } from 'react';
import {ConteinerPergunta} from './perguntas/ConteinerPergunta';
import {qtdPerguntasIcon}  from './perguntas/qtdPerguntasIcon';
import { listaPerguntas } from '../bancoGeral/bancoPerguntas';
import sem_perguntas_img from '../assets/sem_perguntas.svg'

function Sala({nomeSala, idSala}){

    const listaIdSala = listaPerguntas.filter(elemento => {
        return elemento.idSala == idSala
    })

    let [lista, setLista] = useState(listaIdSala);
    
    const [quantidadePerguntas, setQuantidadePerguntas] = useState(
        lista.length
      );

      const atualizarQuantidadePerguntas = (quantidade) => {
        setQuantidadePerguntas(quantidade);
      };
    
    const verificarPerguntas = () => {
        if(lista.length == 0){
            return <div className="centralSemPerguntas">
                    <img  className="semPerguntas" src={sem_perguntas_img} alt="sem perguntas"></img>
                    <h2>Nenhuma pergunta por aqui...</h2>
                    <p className='p_semperguntas'>Envie o código desta sala para seus amigos e </p>
                           <p className='p_semperguntas'>comece a responder perguntas!</p>
                    
                    </div>
        } else{
            return mapearPerguntas
        }

    }
  
    

    const mapearPerguntas = lista.map((perguntaUser) => {
        return <ConteinerPergunta
      key={perguntaUser.id}
      textoPergunta={perguntaUser.mensagem}
      nomeUsuario={perguntaUser.usuario}
      id={perguntaUser.id}
      setLista={setLista}
      lista={lista}
      atualizarQuantidadePerguntas={atualizarQuantidadePerguntas}
      
    />
    })


    return (
        <>
        
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{qtdPerguntasIcon(quantidadePerguntas)}</div>
            </div>
            <main className="centroPrincipal">
            
            {verificarPerguntas()}
            
            </main>
        </div>
        </>
    )
}


export default Sala;