import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLogin_Screen} from './screens/TelaLogin_Screen'
import {TelaSala_Screen} from './screens/TelaSala_Screen'
import { PainelGrupoSalas_Screen } from './screens/PainelGrupoSalas_Screen'


export const Routess = () => (
    <BrowserRouter>
       
            <Routes>
                <Route path='/' element={<TelaLogin_Screen/>} />
                <Route path='/sala' element={<TelaSala_Screen/>} />
                <Route path='/painelGrupoSalas' element={<PainelGrupoSalas_Screen/>} />
            </Routes>
        
    </BrowserRouter>
)