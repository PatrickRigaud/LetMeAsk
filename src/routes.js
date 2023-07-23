import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLogin_Screen} from './screens/TelaLogin_Screen'
import {TelaSala_Screen} from './screens/TelaSala_Screen'
import { PainelGrupoSalas_Screen } from './screens/PainelGrupoSalas_Screen'
import { nomeSalaContext, iDSalaContext, iDPerguntaContext } from './context/context';
import React, {useState} from 'react';
import { TelaSalaResposta_Screen } from './screens/TelaSalaResposta_Screen';
import {LoginSenha_Screen} from './screens/LoginSenha_Screen'

export const Routess = () => {
    const [infoNome, setNome] = useState('')
    const [infoId, setId] = useState('')
    const [IdPergunta, setIdPergunta] = useState('')
    
    return(
    <BrowserRouter>
        <iDSalaContext.Provider value={setId}>
        <nomeSalaContext.Provider value={setNome}>
        <iDPerguntaContext.Provider value={setIdPergunta}>
                <Routes>
                    <Route path='/login' element={<LoginSenha_Screen/>}/>
                    <Route path='/' element={<TelaLogin_Screen/>} />
                    <Route path='/sala' element={<TelaSala_Screen infoNome={infoNome} infoId={infoId}/>} />
                    <Route path='/painelGrupoSalas' element={<PainelGrupoSalas_Screen/>} />
                    <Route path='/salaRespostas/:idSala/:id' element={<TelaSalaResposta_Screen infoNome={infoNome} infoId={infoId} IdPergunta={IdPergunta}/>} />
                </Routes>
                </iDPerguntaContext.Provider>
            </nomeSalaContext.Provider>
        </iDSalaContext.Provider>
    </BrowserRouter>)
}