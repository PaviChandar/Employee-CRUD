import { Routes, Route, PathRouteProps, IndexRouteProps, Navigate } from "react-router-dom"

import Admin from "../components/admin/home"
import AdminHome from "../components/admin/admin"
import UserHome from "../components/user/home"
import Login from "../container/user/login"
import SignUp from "../container/user/sign-up"
import ValidateSession from "../shared/validation/validate-session"
import AddEmployee from "../container/employee/add"
import EditEmployee from "../container/employee/update"
import { localStorageKey } from "../shared/storage/token"
import jwtDecode from "jwt-decode"
import { useSelector } from "react-redux"
import EditUser from "../container/user/edit-user"
import { IUser } from "../shared/interface/user.interface"

type Props = {
    children: PathRouteProps | IndexRouteProps |any
}

const Router = () => {

    const loginValue = useSelector((state: IUser) => state.userData.login)

    const ProtectedRoutes = ({ children }: Props) => {
        return loginValue ? children : <Navigate to='/admin' />
    }

    const PrivateRoutes = ({ children }: Props) => { 
        return loginValue ? children : <Navigate to='/home' />
    }   

    ValidateSession() 

    return (    
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/home' element= {
                    // <ProtectedRoutes>
                        <UserHome />
                    // </ProtectedRoutes>
                } />

                <Route path='/edit/:id' element={<EditUser />} />

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

                    <Route path='edit/:id' element= {
                        <PrivateRoutes>
                            <EditEmployee />
                        </PrivateRoutes> 
                    }
                    />
                </Route>
            </Routes>
        </>
    )
}

export default Router