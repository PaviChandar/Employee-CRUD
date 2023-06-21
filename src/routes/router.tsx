import { Routes, Route } from "react-router-dom"
import AdminHome from "../components/admin/home"
import UserHome from "../components/user/home"
import Login from "../components/user/login"
import SignUp from "../components/user/sign-up"
import ValidateSession from "../shared/validation/validate-session"

const Router = () => {

    // ValidateSession()

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/admin' element={<AdminHome />} />
                <Route path='/' element={<UserHome />} />
            </Routes>
        </>
    )
}

export default Router