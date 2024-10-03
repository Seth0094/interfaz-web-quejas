import axios from 'axios';

const API_URL = 'https://backend-quejas-production.up.railway.app/api/se';

// Traer todas las quejas asignadas al ingeniero de soporte
export const getAssignedComplaints = async () => {
  const response = await axios.get(`${API_URL}/view-assigned-complaints`, {
    headers: {
      Authorization: localStorage.getItem('access_token'), // Asegúrate de que el token se guarde en el login
    },
  });
  console.log('Assigned Complaints:', response.data);
  return response.data;
};

// Actualizar el estado de una queja
export const updateComplaintStatus = async (complaintId, status) => {
  const response = await axios.put(`${API_URL}/update-complaint-status`, { complaintId, status }, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  console.log(`Updated status of complaint ${complaintId}:`, response.data);
  return response.data;
};

// Responder a una queja
export const respondToComplaint = async (complaintId, response) => {
  const res = await axios.post(`${API_URL}/respond-complaint`, { complaintId, response }, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  console.log(`Responded to complaint ${complaintId}:`, res.data);
  return res.data;
};

export const getSentResponses = async () => {
  const response = await axios.get(`${API_URL}/sent-responses`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  console.log('Sent Responses:', response.data);
  return response.data;
};