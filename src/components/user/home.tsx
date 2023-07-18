import { useSelector } from "react-redux"
import { Button } from "@mui/material"

import Header from "../../shared/component/header"
import Navbar from "../../shared/component/navbar"
import { useDispatch } from "react-redux"
import { viewUser } from "../../container/user"
import { useNavigate, useParams } from "react-router-dom"

const UserHome = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {id}: any = useParams()
    console.log("id in params : ", id)

    const handleUpdate = () => {
        console.log("id in hanlder : ", id)
        // dispatch(viewUser(id))
        navigate(`/edit/${id}`)
    }

    const user = useSelector((state: any) => state.userData.user)

    return (
        <div>
            <h1>User home</h1>
            <h2>USERNAME : {user.username}</h2>
            <h2>Email : {user.email}</h2>
            {/* <h2>Password : {user.userpassword}</h2> */}
            <Navbar />
            {/* <Header /> */}
            <Button onClick={handleUpdate}>Update</Button>
        </div>
    )
}

export default UserHome