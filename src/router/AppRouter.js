import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import PokeBrowser from '../views/PokeBrowser';

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<PokeBrowser />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
