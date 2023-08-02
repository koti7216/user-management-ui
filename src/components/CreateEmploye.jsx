import React, { Component } from 'react';
import Naviga from './Naviga';
import EmployeService from '../service/EmployeService';
import {SaveEmploye} from './SaveEmploye';
class CreateEmploye extends Component {
    constructor(props){
        super(props)
        this.state={
            ename:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.SaveEmploye=this.SaveEmploye.bind(this);    
    }
    changeFirstNameHandler(event){
        this.setState({ename:event.target.value})
    }
    SaveEmploye(e){
        e.preventDefault();
        let employe={ename:this.state.ename};
        EmployeService.postEmploye(employe).then(_res=>this.props.navigate('/employe'));
        console.log(JSON.stringify(employe));
    }
    render() {
        return (
            <div>
               <div className='container'>
                  <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Employe</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name="ename" className='form-control' 
                                    value={this.state.ename} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <button className='btn btn-success' onClick={this.SaveEmploye}>Save</button>
                                <Naviga/>
                            </form>
                        </div>
                    </div>
                  </div>
                </div> 
            </div>
        );
    }
}
export default SaveEmploye(CreateEmploye);