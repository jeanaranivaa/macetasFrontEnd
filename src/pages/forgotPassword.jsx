import logoMacetas from "../assets/logoMacetas.png";
import { useAuthForm } from "../hooks/useAuthForm";

export default function ForgotPassword() {
  const { register, handleSubmit, errors, onRecovery, navigate } = useAuthForm();

  return (
    <div className="fp-root">
      <div className="fp-card">
 
        <div className="fp-logo">
          <img src={logoMacetas} alt="Macetas" width={60} height={60} />
        </div>
 
        <h1 className="fp-title">Ingresa tu correo</h1>
        <p className="fp-subtitle">
          Ingresa tu correo para recibir un código de verificación.
        </p>
 
        <form onSubmit={handleSubmit(onRecovery)} style={{ width: "100%" }}>
          <div className="fp-field">
            <label className="fp-label" htmlFor="fp-email">
              Correo Electrónico
            </label>
            <input
              id="fp-email"
              type="email"
              className="fp-input"
              style={errors.email ? { borderColor: '#ef4444' } : {}}
              placeholder="jeancarloaraniva@gmail.com"
              {...register("email", { 
                required: "Ingresa tu correo para recibir el código.",
                pattern: { value: /^\S+@\S+$/i, message: "El formato de correo no es válido." }
              })}
            />
            
            {/* Mensaje de error ajustado para subirlo y alejarlo del botón */}
            {errors.email && (
              <span 
                style={{ 
                  color: '#ef4444', 
                  fontSize: '11px', 
                  textAlign: 'left', 
                  width: '100%', 
                  display: 'block',
                  marginTop: '2px',       // Lo pega sutilmente al input de arriba
                  marginBottom: '14px',   // Empuja el botón hacia abajo para darle espacio
                  paddingLeft: '2px'
                }}
              >
                {errors.email.message}
              </span>
            )}
            
            <button type="submit" className="fp-btn-primary">
              Enviar Código
            </button>
          </div>
        </form>
 
        <p className="fp-back">
          ¿Recordaste tu contraseña?{" "}
          <span onClick={() => navigate("/login")} className="fp-back-link cursor-pointer">Inicia sesión</span>
        </p>
 
      </div>
    </div>
  );
}