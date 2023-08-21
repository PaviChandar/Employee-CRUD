import Header from "../../shared/component/header"
import Navbar from "../../shared/component/navbar"
import GetAllEmployee from "./get-all-employee"

const Admin = () => {

    return (
        <>
            <h1 >Admin home</h1>
            <Header />
            <Navbar />
            <GetAllEmployee />
        </>
    )
}

export default Admin