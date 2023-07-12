import { Routes, Route, Navigate, PathRouteProps, IndexRouteProps } from "react-router-dom"
import { useSelector } from "react-redux"

import Admin from "../components/admin/home"
import AdminHome from "../components/admin/admin"
import UserHome from "../components/user/home"
import Login from "../container/user/login"
import SignUp from "../container/user/sign-up"
import ValidateSession from "../shared/validation/validate-session"
import AddEmployee from "../container/employee/add"
import EditEmployee from "../container/employee/update"

type Props = {
    children: PathRouteProps | IndexRouteProps |any
}

const Router = () => {
    const login = useSelector((state: any) => state.userData.login)
    
    // const ProtectedRoutes = ({ children }: Props) => { 
    //     return !login ? children : <Navigate to='/admin' />
    // }

    // const PrivateRoutes = ({ children }: Props) => { 
    //     return login ? children : <Navigate to='/' />
    // }

    // ValidateSession()

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/' element= {
                    // <ProtectedRoutes>
                        <UserHome />
                    // </ProtectedRoutes>
                } />

                <Route path='/admin' element= {
                    // <PrivateRoutes>
                        <AdminHome />
                    // </PrivateRoutes>
                    } >

                    <Route path='' element= {
                        // <PrivateRoutes>
                            <Admin />
                        // </PrivateRoutes>
                    } />

                    <Route path='create' element= {
                        // <PrivateRoutes>
                            <AddEmployee />
                        // </PrivateRoutes> 
                    } />

                    <Route path='edit/:id' element= {
                        <EditEmployee />
                    }
                    />

                </Route>

            </Routes>
        </>
    )
}

export default Router