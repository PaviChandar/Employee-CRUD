import { Routes, Route, Navigate, PathRouteProps, IndexRouteProps } from "react-router-dom"

import Admin from "../components/admin/home"
import AdminHome from "../components/admin/home"
import UserHome from "../components/user/home"
import Login from "../components/user/login"
import SignUp from "../container/user/sign-up"
// import SignUp from "../components/user/sign-up"
// import Login from "../container/user/login"
import ValidateSession from "../shared/validation/validate-session"

type Props = {
    children: PathRouteProps | IndexRouteProps | any
}

const Router = () => {
    const login = localStorage.getItem('login')
    
    const ProtectedRoutes = ({ children }: Props) => {    
        return login ? children : <Navigate to='/admin' />
    }

    const PrivateRoutes = ({ children }: Props) => {    
        return login ? children : <Navigate to='/' />
    }

    // ValidateSession()

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/admin' element= {
                    <PrivateRoutes>
                        <AdminHome />
                    </PrivateRoutes>
                } >
                    <Route path='' element= {
                        <PrivateRoutes>
                            <Admin />
                        </PrivateRoutes>
                } />
                </Route>

                <Route path='/' element= {
                    <ProtectedRoutes>
                        <UserHome />
                    </ProtectedRoutes>
                } />

            </Routes>
        </>
    )
}

export default Router