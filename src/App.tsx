import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import SignIn from "./components/Authontication/SignIn";
import SignUp from "./components/Authontication/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home/>} />
        {/* Authontication */}
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        {/* Admin functions */}
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}
