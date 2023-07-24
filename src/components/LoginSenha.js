import imagemLogin from '../assets/tela_login_imagem.svg'
import '../styles/styleTelaLogin.css'
import logo from '../assets/logo_full.svg'
import login from '../assets/login.svg'
import styled from "styled-components";
import { ModalCadastrarUsuario } from './modalCadastrarUsuario';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";


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

const MensagemErro = styled.span`
color: red;
`

export function LoginSenha(){

    const [openModal, setModal] = useState(false);
    let email = useRef(null)
    let senha = useRef(null)
    const link = useNavigate()
    const [mensagemErro, setMensagemErro] = useState('')

    async function fetchLogin(){ // Requisição para logar
        await fetch('http://localhost:4000/usuariologin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  
            email: email.current.value,
            senha: senha.current.value}),
        }).then(response => response.json()) 
        .then(data => {
         if(data.login){
            link('/inicio');
            localStorage.setItem('token', data.token);
         }else{
            setMensagemErro('Email ou Senha incorreta')
         }
        })
          .catch(error => {
            console.error('Erro:', error);
          });
      }


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
                   
                <input placeholder='Email' ref={email} className='inp_codigo_sala'/>
                <input placeholder='Senha' ref={senha} type="password" className='inp_codigo_sala'/>

                <SemCadastroText>Não tem uma conta? <CliqueAqui onClick={() => {
                    setMensagemErro('');
                    setModal(true);
                    }}>clique aqui</CliqueAqui></SemCadastroText>
                <button type="button" className="btn_entrar" onClick={() => {
                    fetchLogin()
                    }}> <img src={login} alt="imagem descrição" className='iconLogin' />Entrar</button>
               <MensagemErro>{mensagemErro}</MensagemErro>
                    

                </FormOp>
            </section>
        </div>
    
    </>
    )
}