
import {useNavigate} from 'react-router-dom';

const AddEmp =function(){
    const UseNavigation = useNavigate();
    return <button className='btn btn-primary' onClick={()=>UseNavigation("/add-employe")}>Add Employe</button>;}
export default AddEmp;