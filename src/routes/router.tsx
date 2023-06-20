import { Routes, Route } from "react-router-dom"
import Login from "../components/user/login"
import SignUp from "../components/user/sign-up"
import ValidateSession from "../shared/validation/validate-session"

const Router = () => {

    ValidateSession()

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </>
    )
}

export default Router