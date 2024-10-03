import axios from 'axios';
import { Navigate } from 'react-router-dom';

const API_URL = 'https://backend-quejas-production.up.railway.app/api/user';



// Servicio para iniciar sesión
export const loginEmployee = async (ci, password) => {
  try {
    const res = await axios.post(`${API_URL}/login-employee`, {
      ci,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.data);
    await setToken(res.data.token)
    return res.data;
    
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Función para guardar el token en localStorage
export const setToken = async (token) => {
  console.log('save token test');
  localStorage.setItem('access_token', token);
  //console.log(token)
};

// Función para obtener el token desde localStorage
export const getToken = () => {
  return localStorage.getItem('access_token');
};

export const removeToken = () => {
  localStorage.removeItem('access_token');
};

// Crear una instancia de axios con configuración base
export const api = axios.create({
  baseURL: API_URL,

});

// Interceptor para añadir el token en cada solicitud si existe
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//añadir rol a usuario existente
export const addUserRole = async (roleData) => {
  const response = await axios.post(`${API_URL}/add-role`, roleData, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};
//traer usuario que son solo ciudadanos
export const getCitizenUsers = async () => {
  const response = await axios.get(`${API_URL}/citizen-users`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await axios.put(`${API_URL}/profile`, userData, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export const logout = async () => {
  
    await axios.post(`${API_URL}/logout`, {}, {
      headers: {
        'Authorization': localStorage.getItem('access_token'),
      },
    });
    localStorage.removeItem('access_token');
    

    
  
  
};


export const sendResetPasswordEmail = async (email) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await axios.post(`${API_URL}/forgot-password`, { email }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('access_token'),
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending reset password email:', error);
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { token, password }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('access_token'),
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};