import { useSelector } from "react-redux"
import { Button } from "@mui/material"

import Header from "../../shared/component/header"
import Navbar from "../../shared/component/navbar"
import { useDispatch } from "react-redux"
import { getAllUser, viewUser } from "../../container/user"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { decodeTokenValue } from "../../shared/storage/token"

const UserHome = () => {
 
    const navigate = useNavigate()
    const params = decodeTokenValue()

    const user = useSelector((state: any) => state.userData.user)

    const handleUpdate = () => {
        navigate(`/edit/${params.Id}`)
    }

    return (
        <div>
            <h1>User home</h1>
            <h2>USERNAME : {user.username}</h2>
            <h2>Email : {user.email}</h2>
            <Navbar />
            {/* <Header /> */}
            <Button onClick={handleUpdate}>Update</Button>
        </div>
    )
}

export default UserHome