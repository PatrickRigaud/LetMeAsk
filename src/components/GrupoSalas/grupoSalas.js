import { listaSalas } from "../../bancoGeral/bancoSalas"
import { CaixaSala } from "./caixaSala";
import imagemLogin from '../../assets/tela_login_imagem.svg'
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import login from '../../assets/login.svg'
import "../../styles/styleGrupoSalas.css"



export function GrupoSalas(){

    let [listaSalaNovo, setListaSala] = useState(listaSalas);
    

    const mapearPerguntas = listaSalaNovo.map((sala) => {
        return (<>
            <CaixaSala 
            key={sala.idSala}
            nomeSala={sala.nome}
            quantidadePerguntasSala={sala.perguntas}
            id={sala.idSala}
            />
        </>)
    
    })

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
         <div className="geral">
            <div className='ladoEsquerdoLogin'>
                    <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
                </div>
            <div className="centerGS">
                <div className="caixasTituloGS">
                <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' ref={inputCodigoSala} className='inp_codigo_sala'/>
                    
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