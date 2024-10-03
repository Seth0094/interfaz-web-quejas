import React, { createContext, useState, useEffect } from 'react';

// Función para extraer roles desde el token
const extractRolesFromToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    const decodedToken = JSON.parse(jsonPayload);
    return decodedToken.roles || [];
  } catch (error) {
    console.error('Error decoding token:', error);
    return [];
  }
};

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Obtener token desde el localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      // Extraer roles del token
      const roles = extractRolesFromToken(token);
      return { token, roles };
    }
    return { token: null, roles: [] };
  });

  // Actualizar el estado de autenticación
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const roles = extractRolesFromToken(token);
      setAuth({ token, roles });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
