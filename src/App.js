import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ListEmploye from './components/ListEmploye';
import HeadeComponent from './components/HeadeComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmploye from './components/CreateEmploye';
import UpdateEmploye from './components/UpdateEmploye';
import DeleteEmp from './components/DeleteEmp';

function App() {
  return (
    <div>
      <Router>
           <HeadeComponent />
              <div className="container">
                <Routes>
                  <Route path='/' element={<ListEmploye/>}></Route>
                  <Route path='/employe' element={<ListEmploye/>}></Route>
                  <Route path='/add-employe' element={<CreateEmploye/>}></Route>
                  <Route path='/update-employe/:id' element={<UpdateEmploye/>}></Route>
                  <Route path='/delete-employe/:id' element={<DeleteEmp/>}></Route>
                </Routes>
              </div>
            <FooterComponent /> 
      </Router>
    </div>
    
  );
}

export default App;
