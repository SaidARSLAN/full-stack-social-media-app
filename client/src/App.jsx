import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import MainPage from "./pages/MainPage"



const App = () => {



    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/main-page" element={<MainPage />} />
        </Routes>
    )
}

export default App