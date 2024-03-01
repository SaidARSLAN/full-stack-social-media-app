import { NavLink, Route, Router, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'


function App() {

  return (
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='index'  element={<MainPage />}/>
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
             
  )
}

export default App
