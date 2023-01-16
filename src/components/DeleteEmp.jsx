import React, { Component } from 'react';
import { withRouter } from './withRouter';
import EmployeService from '../service/EmployeService';
import Naviga from './Naviga';

class DeleteEmp extends Component {
    constructor(props){
        super(props)
        this.state={
            eid:this.props.params,
            ename:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.delEmploye=this.delEmploye.bind(this);    
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
    delEmploye(e){
        e.preventDefault();
        let employe={ename:this.state.ename};
        EmployeService.deleteEmploye(this.state.eid.id).then(_res=>
        this.props.UseNav("/employe"));
        console.log(employe);
    }
    render() {
        return (
            <div>
               <div className='container'>
                  <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Delete Employe</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name="ename" className='form-control' 
                                    value={this.state.ename} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <button className='btn btn-success' onClick={this.delEmploye}>Delete</button>
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

export default withRouter(DeleteEmp);