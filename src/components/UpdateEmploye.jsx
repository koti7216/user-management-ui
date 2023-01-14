import React, { Component } from 'react';
import Naviga from './Naviga';
import EmployeService from '../service/EmployeService';
import { SaveEmploye } from './SaveEmploye';
import { withRouter } from './withRouter';

class UpdateEmploye extends Component {
    constructor(props){
        super(props)
        this.state={
            eid:this.props.params,
            ename:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.updateEmploye=this.updateEmploye.bind(this);    
    }
    componentDidMount(){
        EmployeService.getEmployeById(this.state.eid.id).then(res=>{
            let employe=res.data;
            this.setState({ename:employe.ename})
         })
      console.log(this.state.eid);

    }
    changeFirstNameHandler(event){
        this.setState({ename:event.target.value})
    }
    updateEmploye(e){
        e.preventDefault();
        let employe={ename:this.state.ename};
        
    }
    render() {
        return (
            <div>
               <div className='container'>
                  <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employe</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name="ename" className='form-control' 
                                    value={this.state.ename} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <button className='btn btn-success' onClick={this.updateEmploye}>Update</button>
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

export default withRouter(UpdateEmploye);