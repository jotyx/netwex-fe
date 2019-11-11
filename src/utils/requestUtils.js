import axios from "axios";

export const BASE_URL = "http://localhost";

export const GET = (url) => {
    return axios.get(BASE_URL + url, {withCredentials: false}).then(response => {
        return response;
    });
}

export const POST = (url, data) => {
    return axios.post(BASE_URL + url, data, {withCredentials: false}).then(response => {
        return response;
    });
}

export const DELETE = (url) => {
    return axios.delete(BASE_URL + url, {withCredentials: false}).then(response => {
        return response;
    });
}