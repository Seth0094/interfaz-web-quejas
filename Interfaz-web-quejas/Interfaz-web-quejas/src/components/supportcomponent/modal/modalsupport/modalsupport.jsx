import { useState } from 'react';
import './modalsupport.css';


const ComplaintModal = ({ complaint, ses, onClose, onAssign }) => {
  const [assignedToCI, setAssignedToCI] = useState('');

  const handleAssign = () => {
    onAssign(complaint._id, assignedToCI);
  };

  return (
    <div className="modal-support">
      <div className="modal-support-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Complaint from {complaint.createdBy?.name}</h2>
        <p><strong>Description:</strong> {complaint.description}</p>
        <p><strong>Coordinates:</strong><p><strong>Latitude:</strong></p><em>{complaint.location_coordinates.lat}</em> <p> <strong>Longitude:</strong></p> <em>{complaint.location_coordinates.lon}</em></p>
        <p><strong>Date:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {complaint.status_id?.name}</p>
        <p><strong>Type:</strong> {complaint.type_id?.name}</p>

        <div>
          <label htmlFor="assignTo">Assign to Engineer:</label>
          <select
            id="assignTo"
            value={assignedToCI}
            onChange={(e) => setAssignedToCI(e.target.value)}
          >
            <option value="">Select Engineer</option>
            {ses.map(se => (
              <option key={se._id} value={se.ci}>
                {se.name} {se.lastname} - {(se.roles && se.roles.includes('se')) ? 'Engineer' : 'se'}
              </option>
            ))}
          </select>
          <button onClick={handleAssign}>Assign</button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintModal;
