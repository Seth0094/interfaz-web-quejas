import React, { useState, useEffect } from 'react';
import { getAllComplaintsSupport, assignComplaint } from '../../../services/supportService';
import { getSEs } from '../../../services/adminService';
import ComplaintListSupport from '../../../components/supportcomponent/list/complaintlist-support/complaintlist-support.jsx';
import SupportNavbar from '../../../components/authcomponent/navbar/Supportnavbar/Supportnavbar.jsx';
import '../view-all-complaint-support/view-all-complaint-support.css';


const SupportDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [ses, setSEs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');
  
  useEffect(() => {
    fetchComplaints();
    fetchSEs();
  }, []);
  
  const fetchComplaints = async () => {
    try {
      const data = await getAllComplaintsSupport();
      const notcompleted = data.filter(complaint => complaint.status_id?.name !== 'realizado');
      setComplaints(notcompleted);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const fetchSEs = async () => {
    try {
      const data = await getSEs();
      setSEs(data);
    } catch (error) {
      console.error('Error fetching SEs:', error);
    }
  };

  const handleOpenModal = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
  };

  const handleAssignEngineer = async (complaintId, assignedToCI) => {
    try {
      await assignComplaint(complaintId, assignedToCI);
      fetchComplaints();
      handleCloseModal();
    } catch (error) {
      console.error('Error assigning complaint:', error);
    }
  };

  const filteredComplaints = () => {
    return complaints.filter(complaint => {
      return filter === 'all' ? complaint.status_id.name !== 'realizado' : (complaint.status_id.name !== 'realizado' && complaint.status_id.name === filter);
    });
  };
  

  const sortedComplaints = () => {
    return filteredComplaints().sort((a, b) => {
      if (sort === 'date') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return a.status_id.name.localeCompare(b.status_id.name);
    });
  };

  return (
    <>
      <SupportNavbar />
      <ComplaintListSupport
        complaints={sortedComplaints()}
        onOpenModal={handleOpenModal}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        selectedComplaint={selectedComplaint}
        ses={ses}
        handleCloseModal={handleCloseModal}
        handleAssignEngineer={handleAssignEngineer}
      />
    </>
  );
};

export default SupportDashboard;
