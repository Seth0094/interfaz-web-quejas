import './modalresponses.css';

const ModalResponses = ({ response, onClose }) => {
    return (
        <div className="modal-responses">
            <div className="modal-responses-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Response Details</h2>
                  <p> <strong> Complaint Description</strong>  <td>{response.complaint_id ? response.complaint_id.description : 'No complaint ID'}</td></p>
                <p><strong>Response:</strong> {response.response}</p>
                <p><strong>Date:</strong> {new Date(response.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default ModalResponses;
