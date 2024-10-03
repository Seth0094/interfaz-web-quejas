import React, { useState, useEffect } from 'react';
import { getSEsWithComplaints, unassignComplaint } from '../../../services/supportService';
import SupportNavbar from '../../../components/authcomponent/navbar/Supportnavbar/Supportnavbar.jsx';
import SEList from '../../../components/supportcomponent/list/selist/selist.jsx'; // Asegúrate de que la ruta sea correcta
import '../view-se/view-se.css';

const SEComplaintsView = () => {
  const [seUsersWithComplaints, setSeUsersWithComplaints] = useState([]);
  const [test, setTest] = useState(false);

  useEffect(() => {
    fetchSEsWithComplaints();
  }, [test]);

  const fetchSEsWithComplaints = async () => {
    try {
      const data = await getSEsWithComplaints();
      setSeUsersWithComplaints(data);
    } catch (error) {
      console.error('Error fetching SEs with complaints:', error);
    }
  };

  const handleUnassignComplaint = async (complaintId) => {
    try {
      await unassignComplaint(complaintId);
      fetchSEsWithComplaints();
    } catch (error) {
      console.error('Error unassigning complaint:', error);
    }
  };

  return (
    <>
      <SupportNavbar />
      <div className="se-complaints">
     
        <SEList 
          seUsersWithComplaints={seUsersWithComplaints} 
          handleUnassignComplaint={handleUnassignComplaint} 
        />
      </div>
    </>
  );
};

export default SEComplaintsView;
