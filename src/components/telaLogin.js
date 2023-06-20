import imagemLogin from '../assets/tela_login_imagem.svg'
import login from '../assets/login.svg'
import '../styles/styleTelaLogin.css'
import logo from '../assets/logo_full.svg'
import { Link } from 'react-router-dom'



export function TelaLogin(){

    return (<>

        <div className="main">
            <div className='ladoEsquerdoLogin'>
                <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
            </div>
            <section className="ladoDireitoLogin">
                
                <div className="logo-full">
                    <img className="logo" src={logo} alt="logo"/>
          
                </div>
                <button className="btn_todas_salas">Buscar todas as salas</button>
                <form className='opcoes'>
                    <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' className='inp_codigo_sala'/>
                    
                    <Link to="/sala">
                        <button className="btn_entrar"> <img src={login} alt="imagem descrição" className='iconLogin'/>Entrar na sala</button>
                    </Link>
                    
                </form>
            </section>
        </div>
    
    </>
    )
}