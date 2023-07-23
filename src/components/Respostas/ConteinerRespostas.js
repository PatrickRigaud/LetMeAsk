import { useState, useEffect, useRef } from "react";
import '../../styles/styleConteinerRespostas.css'
import { ConteinerCadaResposta } from "./ConteinerCadaResposta";
import sem_perguntas_img from '../../assets/sem_perguntas.svg';
import voltar_icon from '../../assets/voltar_icon.svg';
import { Link } from 'react-router-dom'



export function ConteinerRespostas ({infoNome, infoId, IdPergunta}) {
    let [perguntaTexto, setPerguntaTexto] = useState('')
    let [perguntaUsuario, setPerguntaUsuario] = useState('')
    let [listaComentarios, setlistaComentarios] = useState([])
    const textAreaEnviarComentario = useRef(null);
    let mensagemEnviarComentario;

    useEffect(()=> {
        async function fetchBuscarPergunta(){
            await fetch(`http://localhost:4000/ask/${IdPergunta}`, {
              method: 'GET',
            }).then(response => response.json()) 
              .then(data => {
                setPerguntaTexto(data[0].descricao)
                setPerguntaUsuario(data[0].usuario)
              })
              .catch(error => {
                console.error('Erro:', error);
              });
          }
          fetchBuscarPergunta()
    }, [IdPergunta])
    


      useEffect(() => {
        async function fetchBuscarComentarios(){
            await fetch(`http://localhost:4000/comentarios/${IdPergunta}`, {
              method: 'GET',
            }).then(response => response.json()) 
              .then(data => {
                setlistaComentarios(data)
              })
              .catch(error => {
                console.error('Erro:', error);
              });
          }
          fetchBuscarComentarios()
      }, [listaComentarios, IdPergunta])


      
      
        async function fetchEnviarComentario(){
            await fetch('http://localhost:4000/comentarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                pergunta_id: IdPergunta,
                descricao: mensagemEnviarComentario,
                usuario: 'Mock User'
                }),
            }).then(response => response.json()) 
              .then(data => {
                console.log(data)
              })
              .catch(error => {
                console.error('Erro:', error);
              });
          }
      



      const verificarComentarios = () => {
        if(listaComentarios.length === 0){
            return <div className="centralSemPerguntas">
                    <img  className="semPerguntas" src={sem_perguntas_img} alt="sem perguntas"></img>
                    <h2>Nenhum comentario por aqui...</h2>
                    <p className='p_semperguntas'>Envie o código desta sala para seus amigos e </p>
                           <p className='p_semperguntas'>comece a responder perguntas!</p>
                    
                    </div>
        } else{
            return mapearComentarios
        }

    }


      const mapearComentarios = listaComentarios.map((perguntaUser) => {
        return <ConteinerCadaResposta
      textoComentario={perguntaUser.descricao}
      nomeUsuario={perguntaUser.usuario}
      id={perguntaUser.id}
      gostei={perguntaUser.gostei}
      naoGostei={perguntaUser.nao_gostei}
      key={perguntaUser.id}
    />
    })



    return (  <div className="center">
    <div className='salaHeader'>
        <div className="Separando_topo">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{infoNome}</h2>
                <div className="quantidadePerguntas">{listaComentarios ? `${listaComentarios.length} comentários` : 'Sem comentários'}</div>
            </div>
            <Link to={`/sala`}>
            <div className="Voltar"><img className="icon_voltar" src={voltar_icon}></img></div>
            </Link>
            
        </div>
        <div className="Pergunta">
            <h3 className="tituloPergunta">{perguntaTexto}</h3>
            <p className="usuario">{perguntaUsuario}</p>
        </div>
        <div>
            <textarea className='fazerPergunta' placeholder='Digite sua resposta aqui...' ref={textAreaEnviarComentario} />
          <div className='footerPergunta'>
            <p className='textoLogin'>Para enviar respostas, <a href='www.google.com'>faça login.</a></p>
            <button className='btnCriarPergunta' onClick={()=> {
                if(textAreaEnviarComentario.current.value < 1){
                    alert('Escreva algo')
                }else{
              mensagemEnviarComentario = textAreaEnviarComentario.current.value;
              fetchEnviarComentario();
              textAreaEnviarComentario.current.value = '';}
            }}>Enviar Resposta</button>
          </div>
        
        </div>
        
    </div>
    <main className="centroPrincipal">
        <h2>Respostas</h2>
    
    {verificarComentarios()}
    </main>
</div>)
}