import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: authReturn()
})

function authReturn(){
    var dt = {};

    if(localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== ""){
        return dt = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('token')
        }
    }
    else{
        return dt = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
}