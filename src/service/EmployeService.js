import axios from 'axios';

const Employe_get_url="http://localhost:9090/1st/3rd";
const Employe_post_url="http://localhost:9090/1st/2nd";
const Employe_getId_url="http://localhost:9090/1st/6th"
class EmployeService{

    getEmploye(){
        return axios.get(Employe_get_url);
    }
    postEmploye(employe){
        return axios.post(Employe_post_url,employe);
    }
    getEmployeById(eid){
        return axios.get(Employe_getId_url+'/'+eid);
    }

}
export default new EmployeService();