import PropTypes from 'prop-types';

const ComplaintListSE = ({ complaints, title, onView }) => {
  return (

    
    <div className='assigned-complaint'>
    <div className="complaint-list">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            {onView && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.createdBy?.name || 'Unknown'} {complaint.createdBy?.lastname || 'Unknown'}</td>
              <td>{complaint.description}</td>
              <td>{new Date(complaint.createdAt).toLocaleDateString()}</td>
              <td>{complaint.status_id?.name || 'Unknown'}</td>
              {onView && (
                <td>
                  <button onClick={() => onView(complaint)}>View</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  
  );
};

ComplaintListSE.propTypes = {
  complaints: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onView: PropTypes.func,
};

export default ComplaintListSE;
