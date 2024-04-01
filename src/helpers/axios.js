import axios from "axios";
import { api } from "../utils/urlConfig";
import store from "../redux/store";
import { authConstants } from "../redux/actions/constants";
// import { authConstants } from "../redux/actions/constants";

const token = window.localStorage.getItem('token');
const headers = {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
    // "Content-Type": "multipart/form-data"

};

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
    baseURL: api,
    headers: headers,
});


const addBearerToken = (req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
};

axiosInstance.interceptors.request.use(addBearerToken);


const handleLogout = () => {
    localStorage.clear();
    store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
};

axiosInstance.interceptors.response.use(

    async (res) => {
        // res.end();
        return res;
    },
    async (error) => {
        console.log(error.response);
        const status = error.response ? error.response.status : 500;

        if (status && status === 500) {
            // handleLogout();
        }

        return Promise.reject(error);
    }   
);

export default axiosInstance;