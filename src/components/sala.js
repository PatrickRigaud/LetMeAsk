import '../styles/styleSala.css';
import React, { useState, useEffect } from 'react';
import {ConteinerPergunta} from './perguntas/ConteinerPergunta';
import {qtdPerguntasIcon}  from './perguntas/qtdPerguntasIcon';
import sem_perguntas_img from '../assets/sem_perguntas.svg'

function Sala({nomeSala, idSala}){

    let [listaPerguntas, setlistaPerguntas] = useState([]);
    const [quantidadePerguntas, setQuantidadePerguntas] = useState(0);

    useEffect(() => {
  async function fetchlistaPerguntas() {
    await fetch('http://localhost:4000/askFilterID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: idSala}),
}).then(response => response.json()) 
  .then(data => {
    setlistaPerguntas(data)
    setQuantidadePerguntas(data.length)
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

fetchlistaPerguntas();

}, [idSala])





    

      const atualizarQuantidadePerguntas = (quantidade) => {
        setQuantidadePerguntas(quantidade);
      };
    
    const verificarPerguntas = () => {
        if(listaPerguntas.length === 0){
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
  
    

    const mapearPerguntas = listaPerguntas.map((perguntaUser) => {
        return <ConteinerPergunta
      textoPergunta={perguntaUser.descricao}
      nomeUsuario={perguntaUser.usuario}
      id={perguntaUser.id}
      setLista={setlistaPerguntas}
      lista={listaPerguntas}
      atualizarQuantidadePerguntas={atualizarQuantidadePerguntas}
      key={perguntaUser.id}
    />
    })


    return (
        <>
        
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{qtdPerguntasIcon(quantidadePerguntas, quantidadePerguntas)}</div>
            </div>
            <main className="centroPrincipal">
            
            {verificarPerguntas()}
            
            </main>
        </div>
        </>
    )
}


export default Sala;