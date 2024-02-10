import { NavLink, Route, Router, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import EnterPage from './components/EnterPage'



function App() {

  return (
            <Routes>
              <Route path='/' element={<EnterPage />} />
              <Route path='index'  element={<MainPage />}/>
            </Routes>
             
  )
}

export default App
