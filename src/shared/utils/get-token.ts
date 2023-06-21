import { useNavigate } from "react-router-dom"

const GetToken = () => {

    const navigate = useNavigate()

    const getToken = () => {
        if(localStorage.getItem('token') === undefined) {
            navigate('/login')
        } else {
            if(localStorage.getItem('token') === 'true') {
                alert("Admin logged-in successfully!")
                navigate('/admin')
            } else {
                alert("User logged-in successfully!")
                navigate('/user')
            }
        }
    }

    return {
        getToken
    }
}

export default GetToken