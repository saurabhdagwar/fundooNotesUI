import axios from 'axios';
   
export default class axiosServices {
    Post = (url,data, isHeaderRequired = false, header = null ) => {
        return axios.post(url, data, isHeaderRequired, header)
    } 
}