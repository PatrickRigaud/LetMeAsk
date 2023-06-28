import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLoginScreen} from './screens/telaLoginScreen'
import {TelaScreen} from './screens/salaScreen'
import { GrupoSalasScreen } from './screens/grupoSalasScreen'


export const Routess = () => (
    <BrowserRouter>
       
            <Routes>
                <Route path='/' element={<TelaLoginScreen/>} />
                <Route path='/sala' element={<TelaScreen/>} />
                <Route path='/grupoSalas' element={<GrupoSalasScreen/>} />
            </Routes>
        
    </BrowserRouter>
)