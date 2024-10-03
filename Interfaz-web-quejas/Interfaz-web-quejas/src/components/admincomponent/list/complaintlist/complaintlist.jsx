import React from 'react';
import './complaintlist.css';

const ComplaintList = ({
  complaints,
  userFilter,
  descriptionFilter,
  statusfilter,
  setUserFilter,
  setDescriptionFilter,
  setStatusFilter,
  applyFilters,
  handleDeleteComplaint,
}) => {
  return (
    <div className="view-complaints">

      <h2>Complaints</h2>
      <p>Review and manage user complaints.</p>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by user"
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
        />
        <label>
          Filter by Status:
          <select value={statusfilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En proceso</option>
            <option value="realizado">Realizado</option>
          </select>
        </label>
       
        <button onClick={applyFilters}>Search</button>
      </div>
      <div className="complaint-list">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div key={complaint._id} className="complaint-item">
              <div className={`status-indicator ${complaint.status_id ? complaint.status_id.name : ''}`} />
              <div className="complaint-info">
                <h3>{complaint.type_id ? complaint.type_id.name : 'Unknown Type'}</h3>
                <p><strong>User:</strong> {complaint.createdBy ? complaint.createdBy.email : 'Unknown User'}</p>
                <p><strong>Complaint:</strong> {complaint.description}</p>
                <p>
                  <strong>Coordinates:</strong>
                  <p><strong>Latitude:</strong> <em>{complaint.location_coordinates.lat}</em></p>
                  <p><strong>Longitude:</strong> <em>{complaint.location_coordinates.lon}</em></p>
                </p>
                <p><strong>Submitted:</strong> {complaint.createdAt ? new Date(complaint.createdAt).toLocaleString() : 'Unknown Date'}</p>
              </div>
              <div className="complaint-actions">
                <p><strong>{complaint.status_id ? complaint.status_id.name : 'Unknown Status'}</strong></p>
                <button onClick={() => handleDeleteComplaint(complaint._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No complaints found.</p>
        )}
      </div>
    </div>
  );
};

export default ComplaintList;
