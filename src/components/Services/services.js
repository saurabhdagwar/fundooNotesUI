import Axios from './axiosServices.js'
const http = new Axios();
const registrationUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp"
export default class services {
    Registration = (data) => {
        return http.Post(registrationUrl,data);
    }
}