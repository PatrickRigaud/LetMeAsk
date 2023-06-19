import icone_usuario from '../assets/icone_usuario.svg'
import check from '../assets/checkmark-circle-1.svg'
import excluir from '../assets/Excluir.svg'
import messages from '../assets/Messages.svg'
import '../styles/styleSala.css'

export function Sala({nomeSala, textoPergunta, nomeUsuario}){

    const listaPerguntas = [
        {mensagem: 'Qual a cor do céu?',
         usuario: 'Alexandre'}
        
    ]

    let temPergunta = ''

    if(listaPerguntas.length > 0){
        temPergunta = `Perguntas ${listaPerguntas.length}`
    } else{
        temPergunta = 'Sem perguntas'
    }

    const pergunta = <div>
        <p>{textoPergunta}</p>
        <footer>
            <div className="usuario">
                <div className='circulo'><img src={icone_usuario} alt="icone de usuario"></img></div>
                <div>{nomeUsuario}</div>
            </div>

            <div className="icones">
                <img src={check} alt="check"></img>
                <img src={excluir} alt="excluir"></img>
                <img src={messages} alt="messages"></img>
            </div>
        </footer>
    </div>



    return (
        <>
        <div className="center">
            <div className="caixasTitulo">
                <h2 className="tituloSala">{nomeSala}</h2>
                <div className="quantidadePerguntas">{temPergunta}</div>
            </div>
            <main className="centroPrincipal">
            {pergunta}
            </main>
        </div>
        </>
    )
}