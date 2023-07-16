import icone_usuario from '../../assets/icone_usuario.svg'


export function ConteinerCadaResposta({textoComentario, nomeUsuario, id, gostei, naoGostei}){

    

        return <div className="pergunta"  key={id} >
            <p className='textoPergunta'>{textoComentario}</p>
            <footer>
                <div className="usuario">
                    <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                    <div>{nomeUsuario}</div>
                </div>
    
                <div className="icones">
                    <div className="gostei">Gostei: {gostei}</div>
                    <div className="naoGostei">Não Gostei: {naoGostei}</div> 
                       
                </div>
            </footer>
            
        </div>
        }