import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLogin_Screen} from './screens/TelaLogin_Screen'
import {TelaSala_Screen} from './screens/TelaSala_Screen'
import { PainelGrupoSalas_Screen } from './screens/PainelGrupoSalas_Screen'
import { nomeSalaContext, iDSalaContext, iDPerguntaContext, nomeUsuarioContext, sobrenomeUsuarioContext } from './context/context';
import React, {useState} from 'react';
import { TelaSalaResposta_Screen } from './screens/TelaSalaResposta_Screen';
import {LoginSenha_Screen} from './screens/LoginSenha_Screen'

export const Routess = () => {
    const [infoNome, setNome] = useState('')
    const [infoId, setId] = useState('')
    const [IdPergunta, setIdPergunta] = useState('')
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [sobrenomeUsuario, setSobrenomeUsuario] = useState('')
    
    return(
    <BrowserRouter>
        <iDSalaContext.Provider value={setId}>
        <nomeSalaContext.Provider value={setNome}>
        <iDPerguntaContext.Provider value={setIdPergunta}>
        <nomeUsuarioContext.Provider value={setNomeUsuario}>
        <sobrenomeUsuarioContext.Provider value={setSobrenomeUsuario}>
                <Routes>
                    <Route path='/' element={<LoginSenha_Screen/>}/>
                    <Route path='/inicio' element={<TelaLogin_Screen/>} />
                    <Route path='/sala' element={<TelaSala_Screen infoNome={infoNome} infoId={infoId} nomeUsuario={nomeUsuario} sobrenomeUsuario={sobrenomeUsuario}/>} />
                    <Route path='/painelGrupoSalas' element={<PainelGrupoSalas_Screen/>} />
                    <Route path='/salaRespostas/:idSala/:id' element={<TelaSalaResposta_Screen infoNome={infoNome} infoId={infoId} IdPergunta={IdPergunta}/>} />
                </Routes>
                        </sobrenomeUsuarioContext.Provider>
                    </nomeUsuarioContext.Provider>
                </iDPerguntaContext.Provider>
            </nomeSalaContext.Provider>
        </iDSalaContext.Provider>
    </BrowserRouter>)
}