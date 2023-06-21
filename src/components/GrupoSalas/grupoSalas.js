import { listaSalas } from "../../bancoGeral/bancoSalas"
import { CaixaSala } from "./caixaSala";
import imagemLogin from '../../assets/tela_login_imagem.svg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import login from '../../assets/login.svg'
import "../../styles/styleGrupoSalas.css"


export function GrupoSalas(){

    let [listaSalaNovo, setListaSala] = useState(listaSalas);

    const mapearPerguntas = listaSalaNovo.map((sala) => {
        return (<>
            <CaixaSala 
            nomeSala={sala.nome}
            quantidadePerguntasSala={sala.perguntas}
            id={sala.idSala}/>
        </>)
    
    })




    return (<>
         <div className="geral">
            <div className='ladoEsquerdoLogin'>
                    <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
                </div>
            <div className="centerGS">
                <div className="caixasTituloGS">
                <h2 className="textoLogin">-- Entre em uma sala --</h2>
                    <input placeholder='Digite o código da sala' className='inp_codigo_sala'/>
                    
                    <Link to="/sala">
                        <button className="btn_entrar"> <img src={login} alt="imagem descrição" className='iconLogin'/>Entrar na sala</button>
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