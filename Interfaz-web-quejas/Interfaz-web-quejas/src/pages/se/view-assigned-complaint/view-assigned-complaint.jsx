
import { useState, useEffect } from 'react';
import { getAssignedComplaints, updateComplaintStatus, respondToComplaint } from '../../../services/seService';
import SEnavbar from '../../../components/authcomponent/navbar/SEnavbar/SEnavbar.jsx';
import ModalSE from '../../../components/secomponent/modal/modalSE/modalSE.jsx';
import ComplaintListSE from '../../../components/secomponent/list/complaintlistSE/complaintlistSE.jsx';
import './view-assigned-complaint.css';

const ViewAssignedComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [completedComplaints, setCompletedComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    fetchAssignedComplaints();
  }, []);

  const fetchAssignedComplaints = async () => {
    try {
      const data = await getAssignedComplaints();
      const assigned = data.filter(complaint => complaint.status_id?.name !== 'realizado');
      const completed = data.filter(complaint => complaint.status_id?.name === 'realizado');
      setComplaints(assigned);
      setCompletedComplaints(completed);
    } catch (error) {
      console.error('Error fetching assigned complaints:', error);
    }
  };

  const openModal = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const closeModal = () => {
    setSelectedComplaint(null);
    fetchAssignedComplaints(); // Refresh complaints after closing modal
  };

  const handleUpdateStatus = async (complaintId, status) => {
    try {
      await updateComplaintStatus(complaintId, status);
      alert("Estado de la queja cambiado");
      fetchAssignedComplaints(); // Refresh complaints after status update
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleRespond = async (complaintId, response) => {
    try {
      await respondToComplaint(complaintId, response);
      closeModal();
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  return (
    <>
      <SEnavbar />
    
      <div className="assigned-complaints">
        <ComplaintListSE
          complaints={complaints}
          title="Assigned Complaints"
          onView={openModal}
        />
        {selectedComplaint && (
          <ModalSE
            complaint={selectedComplaint}
            onClose={closeModal}
            onUpdateStatus={handleUpdateStatus}
            onRespond={handleRespond}
          />
        )}
      </div>
      <div className="completed-complaints">
        <ComplaintListSE
          complaints={completedComplaints}
          title="Completed Complaints"
        />
      </div>
      
    </>
  );
};

export default ViewAssignedComplaints;