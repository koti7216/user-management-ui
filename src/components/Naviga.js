import {useNavigate} from 'react-router-dom';

const Naviga =function(){
    const UseNavigation = useNavigate();
    return <button className='btn btn-danger' onClick={()=>UseNavigation("/employe")} style={{marginLeft:"10px"}}>Cancel</button>;}
export default Naviga;