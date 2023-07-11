import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLogin_Screen} from './screens/TelaLogin_Screen'
import {TelaSala_Screen} from './screens/TelaSala_Screen'
import { PainelGrupoSalas_Screen } from './screens/PainelGrupoSalas_Screen'
import { nomeSalaContext, iDSalaContext } from './context/context';
import React, {useState} from 'react';

export const Routess = () => {
    const [infoNome, setNome] = useState('')
    const [infoId, setId] = useState('')
    
    return(
    <BrowserRouter>
        <iDSalaContext.Provider value={setId}>
        <nomeSalaContext.Provider value={setNome}>
                <Routes>
                    <Route path='/' element={<TelaLogin_Screen/>} />
                    <Route path='/sala' element={<TelaSala_Screen infoNome={infoNome} infoId={infoId}/>} />
                    <Route path='/painelGrupoSalas' element={<PainelGrupoSalas_Screen/>} />
                </Routes>
            </nomeSalaContext.Provider>
        </iDSalaContext.Provider>
    </BrowserRouter>)
}