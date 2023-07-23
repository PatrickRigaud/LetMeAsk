import imagemLogin from '../assets/tela_login_imagem.svg'
import '../styles/styleTelaLogin.css'
import logo from '../assets/logo_full.svg'
import login from '../assets/login.svg'
import styled from "styled-components";
import { ModalCadastrarUsuario } from './modalCadastrarUsuario';
import React, { useState } from 'react';

const FormOp = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`

const CliqueAqui = styled.span`
color: blue;
cursor: pointer;
`

const SemCadastroText = styled.p`
    margin: 0;
    font-size: 14px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export function LoginSenha(){

    const [openModal, setModal] = useState(false);


    return (<>

        <div className="main">
            <ModalCadastrarUsuario
            isOpen={openModal}
            setModalOpen={() => setModal(!openModal)}/>

            <div className='ladoEsquerdoLogin'>
                <img src={imagemLogin} className='imagemEsquerdo' alt="imagem descrição"/>
            </div>
            <section className="ladoDireitoLogin">
                
                <div className="logo-full">
                    <img className="logo" src={logo} alt="logo"/>
          
                </div>
                
                <FormOp className='opcoes'>
                   
                <input placeholder='Login' className='inp_codigo_sala'/>
                <input placeholder='Senha' type="password" className='inp_codigo_sala'/>

                <SemCadastroText>Não tem uma conta? <CliqueAqui onClick={() => {setModal(true)}}>clique aqui</CliqueAqui></SemCadastroText>
                <button type="button" className="btn_entrar"> <img src={login} alt="imagem descrição" className='iconLogin' />Entrar</button>
               
                    

                </FormOp>
            </section>
        </div>
    
    </>
    )
}