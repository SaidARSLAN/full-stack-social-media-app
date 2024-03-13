import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import MainPage from "./pages/MainPage"
import Register from "./pages/Register"



const App = () => {



    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/main-page" element={<MainPage />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App