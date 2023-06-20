import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TelaLoginScreen} from './screens/telaLoginScreen'
import {TelaScreen} from './screens/salaScreen'

export const Routess = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<TelaLoginScreen/>} />
            <Route path='/sala' element={<TelaScreen/>} />
        </Routes>
    </BrowserRouter>
)