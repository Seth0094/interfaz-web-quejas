import React from 'react';
import './selist.css';

const SEList = ({ seUsersWithComplaints, handleUnassignComplaint }) => {
  return (
    <div className='view-se'>

<h2>Engineers with Assigned Complaints</h2>


    
    <div className="se-list">
      {seUsersWithComplaints.map((seUser) => (
        <div key={seUser._id} className="se-user">
          <h2>{seUser.name} {seUser.lastname}</h2>
          <p>Email: {seUser.email}</p>
          <p>CI: {seUser.ci}</p>
          <h3>Assigned Complaints</h3>
          <div className="complaint-list">
            {seUser.complaints.length > 0 ? (
              <ul>
                {seUser.complaints.map((complaint) => (
                  <li key={complaint._id}>
                    <p><strong>Description:</strong> {complaint.description}</p>
                    <p><strong>Date:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> {complaint.status_id?.name || 'Unknown'}</p>
                    <p><strong>Type:</strong> {complaint.type_id?.name || 'Unknown'}</p>
                    <button onClick={() => handleUnassignComplaint(complaint._id)}>Unassign</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No complaints assigned.</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SEList;
