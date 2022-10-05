import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paths/home';
import Inventory from '../paths/inventory';
import Order from '../paths/order';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='inventory' element={<Inventory/>}/>
                <Route path='order' element={<Order/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}