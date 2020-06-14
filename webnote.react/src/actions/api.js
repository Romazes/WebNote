import axios from 'axios';

const baseUrl = "https://localhost:5001/api/"

export default {
    note(url = baseUrl + 'notes/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newRecored => axios.post(url, newRecored),
            update : (id, updateRecord) => axios.put(url + id, updateRecord),
            delete : id => axios.delete(url + id)
        }
    }
}