import React from 'react';

const ResponsesList = ({ responses, openModal }) => {
  return (
    <div className="sent-responses">
      <h2>Sent Responses</h2>
      <table>
        <thead>
          <tr>
            <th>Complaint</th>
            <th>Response</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response._id}>
              <td>{response.complaint_id ? response.complaint_id.type_id.name : 'No type'}</td>
              <td>{response.response ? response.response.substring(0, 10) : 'No response'}</td>
              <td>{new Date(response.createdAt).toLocaleDateString()}</td>
              <td>
                <button onClick={() => openModal(response)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsesList;
