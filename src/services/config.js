import axios from "axios"

// const BASE_URL = "http://127.0.0.1:8000/api/"
const api = axios.create({baseURL:"http://localhost:8000/api/"});

// api.interceptors.response.use(
//     (response) => response.data ,
//     (error) => Promise.reject(error)
// );

export {api};
