import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardPage from '../pages/Dashboard'
import CreateOffer from '../pages/CreateOffer'
import Buy from '../pages/Buy'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/create-offer" element={<CreateOffer />} />
                <Route path="/buy" element={<Buy />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
