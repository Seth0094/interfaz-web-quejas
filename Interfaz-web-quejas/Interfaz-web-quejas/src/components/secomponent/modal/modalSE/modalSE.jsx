import { useState } from 'react';
import './modalSE.css'; // Asegúrate de crear este archivo CSS

const ModalSE = ({ complaint, onClose, onUpdateStatus, onRespond }) => {
  const [status, setStatus] = useState(complaint.status_id?.name || '');
  const [response, setResponse] = useState('');

  const handleUpdateStatus = () => {
    onUpdateStatus(complaint._id, status);
  };

  const handleRespond = () => {
    onRespond(complaint._id, response);
  };

  return (
    <div className="modal-SE">
      <div className="modal-SE-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Complaint from {complaint.createdBy?.name} {complaint.createdBy?.lastname}</h2>
        <p><strong>Description:</strong> {complaint.description}</p>
        <p>
          <strong>Coordinates:</strong> 
          <p><strong>Latitude:</strong> <em>{complaint.location_coordinates.lat}</em></p>
          <p><strong>Longitude:</strong> <em>{complaint.location_coordinates.lon}</em></p>
        </p>
        <p><strong>Date:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {complaint.status_id?.name}</p>
        <p><strong>Type:</strong> {complaint.type_id?.name}</p>

        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pendiente">Earring</option>
            <option value="en proceso">In progress</option>
            <option value="realizado">Completed</option>
          </select>
          <button onClick={handleUpdateStatus}>Update Status</button>
        </div>

        <div id='contenedor'>
          <label htmlFor="response">Response:</label>
          <input
            id="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          ></input>
          <button onClick={handleRespond}>Submit Response</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSE;

