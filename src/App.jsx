import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword"; 
import VerifyCode from "./pages/verifyCode"; 
import ResetPassword from "./pages/resetPassword"; // 1. Importamos la pantalla de la nueva contraseña

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Enrutamiento inicial */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Mapeo de autenticación pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Flujo completo de recuperación de credenciales */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* 2. Nueva ruta mapeada */}
      </Routes>
    </BrowserRouter>
  );
}