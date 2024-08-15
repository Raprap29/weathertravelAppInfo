import axios from "axios";

const axiosClient = axios.create({
    // Base URL for API requests
    baseURL: "http://127.0.0.1:8000",
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
       const {response} = error;

       if(response.status === 401){
            return;
       }
    }
)

export default axiosClient;