import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Thongtinnhaxe from "./pages/Thongtinnhaxe.jsx";
import BusStation from "./pages/bus-station.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/thongtinnhaxe" element={<Thongtinnhaxe />} /> {}
       <Route path="/bus-station" element={<BusStation />} /> 
    </Routes>
  );
}
