import React, { useState, useEffect, useContext } from 'react';
import { getAllComplaintsAdmin, deleteComplaint } from '../../../services/adminService';
import AdminNavbar from '../../../components/authcomponent/navbar/Adminnavbar/Adminnavbar';
import './ViewComplaint.css';
import ComplaintList from '../../../components/admincomponent/list/complaintlist/complaintlist';


const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [userFilter, setUserFilter] = useState('');
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [statusfilter, setStatusFilter] = useState('')


  useEffect(() => {
    fetchComplaints();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [userFilter, descriptionFilter,statusfilter]);

  const fetchComplaints = async () => {
    try {
      const data = await getAllComplaintsAdmin();
      console.log('Fetched complaints:', data);
      await setComplaints(data);
      await setFilteredComplaints(data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const applyFilters = () => {
    let filtered = complaints;
    if (userFilter) {
      filtered = filtered.filter(c => c.createdBy && c.createdBy.email && c.createdBy.email.includes(userFilter));
    }
    if (descriptionFilter) {
      filtered = filtered.filter(c => c.description && c.description.includes(descriptionFilter));
    }
    if (statusfilter && statusfilter !== 'all') {
      filtered = filtered.filter(c => c.status_id.name && c.status_id.name.includes(statusfilter));
    }
    
    setFilteredComplaints(filtered);
  };

  const handleDeleteComplaint = async (complaintId) => {
    try {
      console.log("desde el componente")

      deleteComplaint(complaintId);
      fetchComplaints();      
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <ComplaintList
        complaints={filteredComplaints}
        userFilter={userFilter}
        descriptionFilter={descriptionFilter}
        statusfilter={statusfilter}
        setUserFilter={setUserFilter}
        setStatusFilter={setStatusFilter}
        setDescriptionFilter={setDescriptionFilter}
        applyFilters={applyFilters}
        handleDeleteComplaint={handleDeleteComplaint}
      />
    </>
  );
};

export default ViewComplaints;
