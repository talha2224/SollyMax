import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PublicPage from '../pages/PublicPage'
import PrivatePage from '../pages/PrivatePage'
import CreateMoviePage from '../pages/CreateMoviePage'
import CatalogMoviePage from '../pages/CatalogMoviePage'
import EditMoviesPage from '../pages/EditMoviesPage'
import PaymentIntegrationPage from '../pages/PaymentIntegrationPage'
import EditPaymentPage from '../pages/EditPaymentPage'
import UserListPage from '../pages/UserListPage'
import UserSessionPage from '../pages/UserSessionPage'
import PaidUserPage from '../pages/PaidUserPage'
import UserGroupPage from '../pages/UserGroupPage'


const Routers = () => {

  return (

    <Routes>

      <Route path='/admin/'>
        <Route path='home' element={<HomePage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='bucket/public' element={<PublicPage/>} />
        <Route path='bucket/private' element={<PrivatePage/>} />
        <Route path='movie/create' element={<CreateMoviePage/>} />
        <Route path='movie/catalog' element={<CatalogMoviePage/>} />
        <Route path='movie/edit/:id' element={<EditMoviesPage/>} />
        <Route path='payment/integration' element={<PaymentIntegrationPage/>} />
        <Route path='payment/integration/edit' element={<EditPaymentPage/>} />
        <Route path='user/list' element={<UserListPage/>} />
        <Route path='user/session' element={<UserSessionPage/>} />
        <Route path='user/paid' element={<PaidUserPage/>} />
        <Route path='user/group' element={<UserGroupPage/>} />


      </Route>

    </Routes>
  )
}

export default Routers
