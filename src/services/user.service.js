import axios from "axios";

//const API_URL = "http:localhost:8080/api";
const API_URL = "http://ec2-54-92-195-134.compute-1.amazonaws.com:8080/api";

const getPublicContent = () => {

    return axios.get(API_URL + "/items/status?status=true");

}

const getUserBoard = () => {
    return axios.get(API_URL + "/items/status?status=false");
};

const UserService = {

    getPublicContent,
    getUserBoard
};

export default UserService;