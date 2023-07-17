import Header from "../../shared/component/header"
import Navbar from "../../shared/component/navbar"
import { decodeTokenValue } from "../../shared/storage/token"

const UserHome = () => {

    const decodeValue = decodeTokenValue()
    console.log("dec val : ", decodeValue)

    return (
        <div>
            <h1>User home</h1>
            <h2>{decodeValue.email}</h2>
            <Navbar />
            <Header />
        </div>
    )
}

export default UserHome