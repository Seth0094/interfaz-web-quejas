import ComplaintModal from '../../modal/modalsupport/modalsupport';

const ComplaintListSupport = ({
  complaints,
  onOpenModal,
  filter,
  setFilter,
  sort,
  setSort,
  selectedComplaint,
  ses,
  handleCloseModal,
  handleAssignEngineer
}) => {
  return (
    <div className="view-all-complaint">
      <h2>Complaints</h2>
      <div className="filters">
        <label>
          Filter by:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pendiente">earring</option>
            <option value="en proceso">in progress</option>
            
          </select>
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>
      <div className="complaint-list">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Type</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint.createdBy?.name || 'Unknown'}</td>
                <td>{complaint.description}</td>
                <td>{new Date(complaint.createdAt).toLocaleDateString()}</td>
                <td>{complaint.status_id?.name || 'Unknown'}</td>
                <td>{complaint.type_id?.name || 'Unknown'}</td>
                <td>{complaint.assignedTo?.name || 'Unassigned'}</td>
                <td>
                  <button onClick={() => onOpenModal(complaint)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedComplaint && (
        <ComplaintModal
          complaint={selectedComplaint}
          ses={ses}
          onClose={handleCloseModal}
          onAssign={handleAssignEngineer}
        />
      )}
    </div>
  );
};

export default ComplaintListSupport;
