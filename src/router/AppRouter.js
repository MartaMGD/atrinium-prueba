import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import PokeQuery from './PokeQuery';
import PokeDetail from '../views/PokeDetail';
import Footer from '../components/ui/Footer';

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<PokeQuery />} />
                    <Route path="/pokemon/:pokemonId" element={<PokeDetail />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
