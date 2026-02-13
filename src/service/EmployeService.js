import axios from 'axios';

const Employe_get_url="http://localhost:9091/1st/3rd";
const Employe_post_url="http://localhost:9091/1st/2nd";
const Employe_getId_url="http://localhost:9091/1st/6th";
const Employe_putId_url="http://localhost:9091/1st/4th";
const Employe_delete_url="http://localhost:9091/1st/5th";


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
    updateEmp(employe,eid){
        return axios.put(Employe_putId_url+'/'+eid,employe);
    }
    deleteEmploye(eid){
        return axios.delete(Employe_delete_url+'/'+eid);
    }

}
export default new EmployeService();