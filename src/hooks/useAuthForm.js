import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginRequest, registerRequest, recoveryRequest, verifyCodeRequest } from '../api/authApi';

export const useAuthForm = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
    mode: 'onChange' // Valida en tiempo real mientras el usuario escribe
  });

  // 1. INICIO DE SESIÓN
  const onLogin = async (data) => {
    try {
      toast.loading('Verificando credenciales...', { id: 'auth' });
      const response = await loginRequest(data.email, data.password);
      toast.success(`¡Bienvenido de nuevo!`, { id: 'auth' });
      navigate('/'); // Redirige a la tienda principal
    } catch (error) {
      toast.error(error.message, { id: 'auth' });
    }
  };

  // 2. REGISTRO DE USUARIOS
  const onRegister = async (data) => {
    try {
      toast.loading('Creando tu cuenta...', { id: 'auth' });
      await registerRequest(data);
      toast.success('¡Registro completado! Ya puedes iniciar sesión.', { id: 'auth' });
      reset();
      navigate('/login');
    } catch (error) {
      toast.error('Ocurrió un error en el registro.', { id: 'auth' });
    }
  };

  // 3. RECUPERACIÓN (Ingresa tu correo)
  const onRecovery = async (data) => {
    try {
      toast.loading('Enviando código...', { id: 'auth' });
      const response = await recoveryRequest(data.email);
      toast.success(response.message || 'Código enviado con éxito', { id: 'auth' });
      
      // Redirige a la pantalla para ingresar los 4 dígitos
      navigate('/verify-code'); 
      reset(); 
    } catch (error) {
      toast.error(error.message, { id: 'auth' });
    }
  };

  /// 4. VERIFICACIÓN (Ingresa el código de 4 dígitos)
  const onVerifyCode = async (data) => {
    try {
      toast.loading('Verificando código...', { id: 'auth' });
      
      // COMENTADO TEMPORALMENTE PARA SIMULACIÓN:
      // await verifyCodeRequest(data.code); 
      
      toast.success('¡Código verificado con éxito!', { id: 'auth' });
      
      // Redirige directamente a la pantalla final para restablecer la contraseña
      navigate('/reset-password'); 
      reset();
    } catch (error) {
      toast.error(error.message || 'El código ingresado es incorrecto.', { id: 'auth' });
    }
  };

  // 5. CAMBIO DE CONTRASEÑA FINAL (Nueva contraseña)
  const onResetPassword = async (data) => {
    try {
      toast.loading('Actualizando contraseña...', { id: 'auth' });
      
      // NOTA: Ajusta esta función en tu authApi.js si cambias el nombre del request (ej. updatePasswordRequest)
      // Passamos solo data.password ya que el backend no necesita el campo de confirmación repetido
      // await updatePasswordRequest(data.password); 
      
      toast.success('¡Contraseña actualizada! Ya puedes iniciar sesión.', { id: 'auth' });
      navigate('/login');
      reset();
    } catch (error) {
      toast.error(error.message || 'No se pudo actualizar la contraseña.', { id: 'auth' });
    }
  };

  // Retornamos todos los métodos necesarios para tus vistas
  return { 
    register, 
    handleSubmit, 
    errors, 
    onLogin, 
    onRegister, 
    onRecovery, 
    onVerifyCode, 
    onResetPassword,
    navigate, 
    setValue, 
    watch 
  };
};