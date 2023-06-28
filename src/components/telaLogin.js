import imagemLogin from '../assets/tela_login_imagem.svg'
import login from '../assets/login.svg'
import '../styles/styleTelaLogin.css'
import logo from '../assets/logo_full.svg'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { listaSalas } from '../bancoGeral/bancoSalas'



export function TelaLogin(){

    let inputCodigoSala = useRef(null)

    const pesquisar = (e) => {
        const achou = listaSalas.find(elemento => elemento.idSala == inputCodigoSala.current.value)
        if(achou){
            localStorage.setItem('id', `${achou.idSala}`)
            localStorage.setItem('nomeSala', `${achou.nome}`)
        }else{
            e.preventDefault()
            alert('Não há sala com esse código')
        }
    }
    

    return (<>

        <div className="main">
            <div className='ladoEsquerdoLogin'>
                <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
            </div>
            <section className="ladoDireitoLogin">
                
                <div className="logo-full">
                    <img className="logo" src={logo} alt="logo"/>
          
                </div>
                <Link to="/grupoSalas">
                    <button className="btn_todas_salas">Buscar todas as salas</button>
                </Link>
                <form className='opcoes'>
                    <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' ref={inputCodigoSala} className='inp_codigo_sala'/>
                    
                    <Link to={`/sala`}>
                        <button type="button" className="btn_entrar" onClick={(e)=> {
                            pesquisar(e)
                            }}> <img src={login} alt="imagem descrição" className='iconLogin' />Entrar na sala</button>
                    
                    </Link>

                </form>
            </section>
        </div>
    
    </>
    )
}