import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import AdminLogin  from "./components/admin/AdminLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin-login" element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
}
