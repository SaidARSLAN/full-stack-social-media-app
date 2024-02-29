import { NavLink, Route, Router, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'



function App() {

  return (
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='index'  element={<MainPage />}/>
            </Routes>
             
  )
}

export default App
