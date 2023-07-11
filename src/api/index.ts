import axios from "axios";

const axiosInstance = axios.create({ 
    baseURL: "http://localhost:4000/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.response.use(
    function (response) {
        return response
    } ,  
    
    function (error) {
        const response = error.response
        if (response.status === 401) {
            alert("Sorry!!something went wrong!!")
        }

        return Promise.reject(error)
    }
)

export default axiosInstance