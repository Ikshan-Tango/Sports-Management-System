import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from './assets/pages/Home/Home';
import Signup from './assets/pages/CreateProfile/signup';
import Login from './assets/pages/Login/login';
import Dashboard from './assets/pages/Dashboard/dashboard';
import Profile from './assets/pages/Profile/profile';
import Emergency from './assets/pages/Emergency/emergency';
import BookSlot from "./assets/pages/BookSlot/bookslot";
import IssueEquipments from "./assets/pages/Equipment book/bookequipments";
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
