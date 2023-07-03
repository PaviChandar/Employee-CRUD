import { Routes, Route, Navigate, PathRouteProps, IndexRouteProps } from "react-router-dom"

import Admin from "../components/admin/home"
import AdminHome from "../components/admin/admin"
import UserHome from "../components/user/home"
import Login from "../container/user/login"
import SignUp from "../container/user/sign-up"
import ValidateSession from "../shared/validation/validate-session"
import AddEmployee from "../container/employee/add"

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

    ValidateSession()

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

                    <Route path='create' element= {
                        <PrivateRoutes>
                            <AddEmployee />
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