import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    
       <Routes>
     <Route path="/AdminDashboard" element = {<AdminDashboard/>}/>

{/*                <Route exact path="/" element = {<Spinner/>}/>
 */}
       {/*   <Route exact path="/" element={<Login/>}/>
         <Route exact path="/register" element = {<Register/>}/>
          <Route path="/instructorDashboard" element = {<InstructorDashboard/>}/>
         <Route path ="/studentDashboard" element = {<StudentDashboard/>}/> */}
                  

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
