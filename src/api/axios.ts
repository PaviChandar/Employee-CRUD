import axios from "axios";

export const axiosInstance = axios.create({ baseURL: "http://localhost:4000/api" })
//check aI

axiosInstance.post('/users')