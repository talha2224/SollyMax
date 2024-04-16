import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PublicPage from '../pages/PublicPage'
import PrivatePage from '../pages/PrivatePage'
import CreateMoviePage from '../pages/CreateMoviePage'


const Routers = () => {

  return (

    <Routes>

      <Route path='/admin/'>
        <Route path='home' element={<HomePage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='bucket/public' element={<PublicPage/>} />
        <Route path='bucket/private' element={<PrivatePage/>} />
        <Route path='movie/create' element={<CreateMoviePage/>} />
      </Route>

    </Routes>
  )
}

export default Routers
