import { listaSalas } from "../../bancoGeral/bancoSalas"
import { ConteinerSalaPainelGrupo } from "./ConteinerSalaPainelGrupo";
import imagemLogin from '../../assets/tela_login_imagem.svg'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import login from '../../assets/login.svg'
import "../../styles/styleGrupoSalas.css"



export function PainelGrupoSalas(){

    let [listaSalaNovo, setListaSala] = useState(listaSalas);


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
    
    

    const mapearPerguntas = listaSalaNovo.map((sala) => (
        <ConteinerSalaPainelGrupo 
            nomeSala={sala.nome}
            // quantidadePerguntasSala={sala.perguntas}
            id={sala.id}
        />
    ));

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
                {listaSalaNovo.length > 0 ? mapearPerguntas : <p>Carregando...</p>}

                </main>
            </div>
        </div>
    </>)
}