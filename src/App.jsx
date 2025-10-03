import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* có thể thêm /home, /dashboard… sau này */}
    </Routes>
  );
}
