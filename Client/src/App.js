import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from './Components/pages/Home/Home';
import Signup from './Components/pages/CreateProfile/signup';
import Login from './Components/pages/Login/login';
import Dashboard from './Components/pages/Dashboard/dashboard';
import Profile from './Components/pages/Profile/profile';
import Emergency from './Components/pages/Emergency/emergency';
import BookSlot from "./Components/pages/BookSlot/bookslot";
import IssueEquipments from "./Components/pages/Equipment book/bookequipments";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
 
            
      <div style={{background:"#f3fffd"}}>
      
            <Router>
                <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route path="/precautions" element={<Emergency />} exact />
                  <Route path="/profile" element={<Profile />} exact />
                  <Route path="/dashboard" element={<Dashboard />} exact />
                  <Route path="/login" element={<Login />} exact />
                  <Route path="/signup" element={<Signup />} exact />
                  <Route path="/bookslot" element={<BookSlot />} exact />
                  <Route path="/issueequiments" element={<IssueEquipments />} exact />
                </Routes>
              </Router>
      </div>


);
}

export default App;
