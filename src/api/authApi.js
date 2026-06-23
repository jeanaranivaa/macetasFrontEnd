export const loginRequest = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@admin.com" && password === "Password123!") {
        resolve({ token: "fake-jwt-token-12345", user: { name: "Admin Macetas", email } });
      } else {
        reject(new Error("Credenciales incorrectas. Verifica tu correo o contraseña."));
      }
    }, 800);
  });
};

export const registerRequest = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Usuario registrado con éxito." });
    }, 800);
  });
};

export const recoveryRequest = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes("@")) {
        resolve({ success: true, message: "Enlace de recuperación enviado al correo." });
      } else {
        reject(new Error("El correo ingresado no está registrado."));
      }
    }, 800);
  });
};