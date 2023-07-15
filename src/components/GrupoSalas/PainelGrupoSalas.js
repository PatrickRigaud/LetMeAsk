import { ConteinerSalaPainelGrupo } from "./ConteinerSalaPainelGrupo";
import imagemLogin from '../../assets/tela_login_imagem.svg'
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import login from '../../assets/login.svg'
import "../../styles/styleGrupoSalas.css"
import { nomeSalaContext, iDSalaContext } from "../../context/context";
import { SalaNaoEncontrada } from "../SalaNaoEncontradaMsg";



export function PainelGrupoSalas(){

    let [listaSalaNovo, setListaSala] = useState([]);
    const [visivel, setVisivel] = useState('')
    
    const setNome = useContext(nomeSalaContext);
    const setId = useContext(iDSalaContext);


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
    
    
    const mapearPerguntas = listaSalaNovo.map((sala) =>(<ConteinerSalaPainelGrupo 
            id={sala.id}
            nomeSala={sala.nome}
            // quantidadePerguntasSala={sala.perguntas}
            key={sala.id}
        />)
) 
    
        
    let inputCodigoSala = useRef(null)

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
         <div className="geral">
            <div className='ladoEsquerdoLogin'>
                    <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
                </div>
            <div className="centerGS">
                <div className="caixasTituloGS">
                <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' ref={inputCodigoSala} className='inp_codigo_sala'/>
                    
                    <SalaNaoEncontrada visivel={visivel}/>

                    <Link to="/sala">
                        <button type="button" className="btn_entrar" onClick={(e)=> {
                            pesquisar(e)
                            }}> <img src={login} alt="imagem descrição" className='iconLogin'/>Entrar na sala</button>
                    </Link>
                    <h2 className="tituloSalaGS">Todas as salas</h2>
                </div>
                <main className="centroPrincipalGS">
                {mapearPerguntas}

                </main>
            </div>
        </div>
    </>)
}