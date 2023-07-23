import styled from "styled-components";


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
    height: 400px;
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

export function ModalCadastrarUsuario({isOpen, setModalOpen}){

    

    if(isOpen){
    return (<div className="telaInteira">
    <CaixaDialogo className="caixaDialogo">
            <Cabeçalho>Cadastre-se</Cabeçalho>
        <FormOp className="botoes">
        <input placeholder='Nome' className='inp_codigo_sala'/>
        <input placeholder='Sobrenome' className='inp_codigo_sala'/>
        <input placeholder='Email' className='inp_codigo_sala'/>
        <input placeholder='Senha' type="password" className='inp_codigo_sala'/>


            <Botoes>
                <BtnEntrar className="btn_entrar">Cadastrar</BtnEntrar>
                <button className="btnCancelar" onClick={setModalOpen}>Cancelar</button>
            </Botoes>
        </FormOp>
    </CaixaDialogo>
</div>)}
    return null
}