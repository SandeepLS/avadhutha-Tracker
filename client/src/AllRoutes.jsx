import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Map from './Pages/Map'
const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/Map' element={<Map />}/>
    </Routes>
  )
}

export default AllRoutes