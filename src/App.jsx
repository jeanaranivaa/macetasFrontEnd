import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Faq from "./pages/Faq"; // 1. Importamos la nueva pantalla de Preguntas Frecuentes
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import VerifyCode from "./pages/verifyCode";
import ResetPassword from "./pages/resetPassword";
import AboutUs from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Enrutamiento inicial / Tienda */}
        <Route path="/" element={<Home />} />

        {/* Nueva Ruta para Soporte al Cliente */}
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="/nosotros" element={<AboutUs />} />


        {/* Mapeo de autenticación pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Flujo completo de recuperación de credenciales */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Redirección por si meten cualquier otra ruta inexistente */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}