import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logoMacetas from "../assets/logoMacetas.png";
import GoogleIcon from "../assets/GoogleIcon";
import { useAuthForm } from "../hooks/useAuthForm";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, onRegister, navigate } = useAuthForm();

  return (
    <div className="login-root">
      <div className="login-left">
        <p className="login-tagline">Tu jardín<br />empieza aquí.</p>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-logo">
            <img src={logoMacetas} alt="Macetas Logo" />
          </div>

          <h1 className="login-title">¡Bienvenido a Macetas!</h1>
          <p className="login-subtitle">Crea tu cuenta.</p>

          <form onSubmit={handleSubmit(onRegister)} style={{ width: "100%" }}>
            {/* Campo Nombre */}
            <div className="login-field">
              <label className="login-label" htmlFor="nombre">Nombre</label>
              <input
                id="nombre" 
                type="text" 
                className="login-input"
                style={errors.nombre ? { borderColor: '#ef4444' } : {}}
                placeholder="Ingresa tu nombre"
                {...register("nombre", { required: "El nombre es obligatorio." })}
              />
              {errors.nombre && <span className="text-red-500 text-xs mt-1 block">{errors.nombre.message}</span>}
            </div>

            {/* Campo Email */}
            <div className="login-field">
              <label className="login-label" htmlFor="email">Correo Electrónico</label>
              <input
                id="email" 
                type="email" 
                className="login-input"
                style={errors.email ? { borderColor: '#ef4444' } : {}}
                placeholder="Ingresa tu correo electrónico"
                {...register("email", { 
                  required: "El correo electrónico es obligatorio.",
                  pattern: { value: /^\S+@\S+$/i, message: "El formato de correo no es válido." }
                })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
            </div>

            {/* Campo Password */}
            <div className="login-field">
              <label className="login-label" htmlFor="password">Contraseña</label>
              <div className="login-input-wrapper">
                <input
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  className="login-input login-input--password"
                  style={errors.password ? { borderColor: '#ef4444' } : {}}
                  placeholder="Crea una contraseña"
                  {...register("password", { 
                    required: "La contraseña es obligatoria.",
                    minLength: { value: 6, message: "La contraseña debe tener mínimo 6 caracteres." }
                  })}
                />
                <button type="button" className="login-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>}
            </div>

            <button type="submit" className="login-btn-primary">Registrarse</button>
          </form>

          <div className="login-divider">
            <span className="login-divider-line" />
            <span className="login-divider-text">O</span>
            <span className="login-divider-line" />
          </div>

          <button type="button" className="login-btn-google">
            <GoogleIcon />
            Regístrate con Google
          </button>

          <p className="login-register">
            ¿Ya tienes una cuenta?{" "}
            <span onClick={() => navigate("/login")} className="login-register-link cursor-pointer">Inicia sesión</span>
          </p>
        </div>
      </div>
    </div>
  );
}