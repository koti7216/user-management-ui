import React, { Component } from 'react';
import EmployeService from '../service/EmployeService';
import AddEmp from './AddEmp';
import { SaveEmploye } from './SaveEmploye';
class ListEmploye extends Component {
    constructor(props){
        super(props)
        this.state={employees:[]}
        this.editEmploye=this.editEmploye.bind(this);
        
    }
     
    componentDidMount(){
        EmployeService.getEmploye().then((res)=>{
            this.setState({employees:res.data});
        })
    }
    editEmploye(id){
        this.props.navigate(`/update-employe/${id}`);
    }
    
    
    render() {

        return (
            <div>
                <h2 className="text-center">employe-list</h2>
                <div className='row'>
                    <AddEmp/>
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Employe Name</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.employees.map(
                                employe=>
                                <tr key={employe.eid}>
                                    <td>{employe.ename}</td>
                                    <td><button onClick={()=>this.editEmploye(employe.eid)} className="btn btn-info">Update</button></td>
                                </tr>

                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


export default SaveEmploye(ListEmploye);
