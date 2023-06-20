import { Routes, Route } from "react-router-dom"
import Login from "../components/user/login"

const Router: any = () => {
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
}

export default Router