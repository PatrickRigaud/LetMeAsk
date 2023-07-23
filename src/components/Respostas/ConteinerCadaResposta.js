import icone_usuario from '../../assets/icone_usuario.svg'
import like from '../../assets/like.svg'
import ilike from '../../assets/ilike.svg'
import { useState } from 'react'



export function ConteinerCadaResposta({textoComentario, nomeUsuario, id, gostei, naoGostei}){

    const [gosteiCount, setGostei] = useState(gostei)
    const [naoGosteiCount, setNaoGostei] = useState(naoGostei)

 

        return <div className="pergunta"  key={id} >
            <p className='textoPergunta'>{textoComentario}</p>
            <footer>
                <div className="usuario">
                    <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                    <div>{nomeUsuario}</div>
                </div>
    
                <div className="icones">
                    <div className="gostei" ><img onClick={() => setGostei((e)=> {return e + 1})} className="gosteiIcon" src={like}></img> {gosteiCount}</div>
                    <div className="naoGostei"><img onClick={() => setNaoGostei((e)=> {return e + 1})} className="naoGosteiIcon"src={ilike}></img> {naoGosteiCount}</div> 
                       
                </div>
            </footer>
            
        </div>
        }