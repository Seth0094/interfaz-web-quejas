import axios from 'axios';

const API_URL = 'https://backend-quejas-production.up.railway.app/api/admin';

//traer todas las quejas
export const getAllComplaintsAdmin = async () => {
  const response = await axios.get(`${API_URL}/view-all-complaints-admin`, {
    headers: {
      Authorization: localStorage.getItem('access_token'), // Asegúrate de que el token se guarde en el login
    },
  });
  console.log(response);
  return response.data;
};

// registro de empleados
export const registerSupport = async (userData) => {
  const response = await axios.post(`${API_URL}/register-support`, userData, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export const registerSE = async (userData) => {
  const response = await axios.post(`${API_URL}/register-se`, userData, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};


export const getSupports = async () => {
  console.log('Fetching supports...');
  const response = await axios.get(`${API_URL}/view-supports`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  console.log('Supports:', response.data);
  return response.data;
};

export const getSEs = async () => {
  console.log('Fetching SEs...');
  const response = await axios.get(`${API_URL}/view-ses`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  console.log('SEs:', response.data);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/delete-employee/${id}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export const deleteComplaint = async (complaintId) => {
  console.log("dsede el handler")
    if(confirm("Estas seguro")){
      const response = await axios.delete(`${API_URL}/complaints/${complaintId}`, {
        headers: {
         Authorization: localStorage.getItem('access_token'), // Asegúrate de que el token se guarde en el login
       },
     });
     return response.data;
    } 
  return
};
