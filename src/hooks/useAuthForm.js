// src/hooks/useAuthForm.js
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginRequest, registerRequest, recoveryRequest } from '../api/authApi';

export const useAuthForm = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange' // Valida en tiempo real mientras el usuario escribe
  });

  const onLogin = async (data) => {
    try {
      toast.loading('Verificando credenciales...', { id: 'auth' });
      const response = await loginRequest(data.email, data.password);
      toast.success(`¡Bienvenido de nuevo!`, { id: 'auth' });
      navigate('/'); // Redirige a la tienda
    } catch (error) {
      toast.error(error.message, { id: 'auth' });
    }
  };

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

  const onRecovery = async (data) => {
    try {
      toast.loading('Enviando código...', { id: 'auth' });
      const response = await recoveryRequest(data.email);
      toast.success(response.message, { id: 'auth' });
      reset();
    } catch (error) {
      toast.error(error.message, { id: 'auth' });
    }
  };

  return { register, handleSubmit, errors, onLogin, onRegister, onRecovery, navigate };
};