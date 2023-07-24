import imagemLogin from '../assets/tela_login_imagem.svg'
import login from '../assets/login.svg'
import '../styles/styleTelaLogin.css'
import logo from '../assets/logo_full.svg'
import { Link } from 'react-router-dom'
import React, { useRef, useState, useContext, useEffect } from 'react'
import { SalaNaoEncontrada } from './SalaNaoEncontradaMsg'
import { nomeSalaContext, iDSalaContext } from '../context/context.js';



export function TelaLogin(){
    const token = localStorage.getItem('token');

    let inputCodigoSala = useRef(null)
    const [visivel, setVisivel] = useState('')

    const setNome = useContext(nomeSalaContext);
    const setId = useContext(iDSalaContext);

   let [listaSalaNovo, setListaSala] = useState([]);
    
    useEffect(() => {
        async function fetchListaSalas() {
            try {
                const response = await fetch('http://localhost:4000/salas');
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                const data = await response.json();
                setListaSala(data);
                
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchListaSalas();
    }, []);
    


    const pesquisar = (e) => {
        const achou = listaSalaNovo.find(elemento => elemento.id == inputCodigoSala.current.value)
        if(achou){
            setNome(achou.nome)
            setId(achou.id)
        }else{
            e.preventDefault()
            setVisivel('block')
            inputCodigoSala.current.value = ''
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
                <Link to="/painelGrupoSalas">
                    <button className="btn_todas_salas">Buscar todas as salas</button>
                </Link>
                <form className='opcoes'>
                    <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' ref={inputCodigoSala} className='inp_codigo_sala'/>
                    
                    <SalaNaoEncontrada visivel={visivel}/>
                    
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