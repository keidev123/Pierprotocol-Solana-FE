import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardPage from '../pages/Dashboard'
import CreateOffer from '../pages/CreateOffer'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/create-offer" element={<CreateOffer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
