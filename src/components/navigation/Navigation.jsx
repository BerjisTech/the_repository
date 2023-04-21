import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from '../../pages'

const Navigation = () => {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Navigation