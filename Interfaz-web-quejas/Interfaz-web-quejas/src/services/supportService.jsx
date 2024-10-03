import axios from 'axios';
import SocketContext from "../context/SocketProvider";
import { io } from 'socket.io-client';



const API_URL = 'https://backend-quejas-production.up.railway.app/api/support';
const socket = io('https://backend-quejas-production.up.railway.app');



export const getAllComplaintsSupport = async () => {
    const response = await axios.get(`${API_URL}/view-all-complaints`, {
      headers: {
        Authorization: localStorage.getItem('access_token'), // Asegúrate de que el token se guarde en el login
      },
    });
    console.log(response);
    return response.data;
  };
  export const assignComplaint = async (complaintId, assignedToCI) => {
    const response = await axios.post(
      `${API_URL}/assign-complaint`,
      { complaintId, assignedToCI },
      {
        headers: {
            Authorization: localStorage.getItem('access_token'),
        },
      }
    );
    return response.data;
  };



  export const unassignComplaint = async (complaintId) => {
    await socket.emit("testUnassinged" , complaintId)
      const response = await axios.patch(`${API_URL}/complaint/${complaintId}/unassign`, {}, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    });
    const response2 = socket.on('testUnassigned2' , (data) => {
      console.log(data);
    });
    console.log(response2);
    return response2;
  };

  export const getSEsWithComplaints = async () => {
    const response = await axios.get(`${API_URL}/se-with-complaints`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    });
    return response.data;
  };