import styled from "styled-components";
import React, { useRef, useState } from 'react';


const FormOp = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
justify-content: center;
`

const Cabeçalho = styled.h2`
margin: 0;
`

const CaixaDialogo = styled.main`
    padding-top: 10px;
    height: 420px;
`
const Botoes = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
align-items: center;
justify-content: center;
`

const BtnEntrar = styled.button`
margin-top: 0;
`

const MensagemErro = styled.span`
color: red;
`

export function ModalCadastrarUsuario({isOpen, setModalOpen}){

    let nome = useRef(null)
    let sobrenome = useRef(null)
    let email = useRef(null)
    let senha = useRef(null)
    const [mensagemErro, setMensagemErro] = useState('')


    async function fetchEnviarCadastro(){ // Requisição para enviar dados do usuario para o banco
        await fetch('http://localhost:4000/usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            nome: nome.current.value,
            sobrenome: sobrenome.current.value, 
            email: email.current.value,
            senha: senha.current.value}),
        }).then(response => response.json()) 
        .then(data => {
            if(data.message){
                setMensagemErro(data.message)
            }
            if(data.fechar){
                setModalOpen()
                setMensagemErro('')
            }
          
        })
          .catch(error => {
            console.error('Erro:', error);
          });
      }

    if(isOpen){
    return (<div className="telaInteira">
    <CaixaDialogo className="caixaDialogo">
            <Cabeçalho>Cadastre-se</Cabeçalho>
        <FormOp className="botoes">
        <input placeholder='Nome' ref={nome} required className='inp_codigo_sala'/>
        <input placeholder='Sobrenome' required  ref={sobrenome} className='inp_codigo_sala'/>
        <input placeholder='Email' required ref={email} className='inp_codigo_sala'/>
        <input placeholder='Senha' required ref={senha} type="password" className='inp_codigo_sala'/>


            <Botoes>
                <BtnEntrar type="button" className="btn_entrar" onClick={() => {
                    if( nome.current.value.length > 2 && 
                        sobrenome.current.value.length > 2 && 
                        email.current.value.length > 2 && 
                        senha.current.value.length > 2 ){
                            fetchEnviarCadastro()
                        }
                   }}>Cadastrar</BtnEntrar>
                <button className="btnCancelar" onClick={() => {
                    setModalOpen()
                    setMensagemErro('')}}>Cancelar</button>
            </Botoes>
            <MensagemErro>{mensagemErro}</MensagemErro>
        </FormOp>
    </CaixaDialogo>
</div>)}
    return null
}