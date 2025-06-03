import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-cover bg-center">
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/login' element={<LogInPage/>}/>
        <Route  path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
