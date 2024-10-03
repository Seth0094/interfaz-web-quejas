import React from 'react';
import './employeelist.css';

const EmployeeList = ({ employees, handleDelete, filter, setFilter }) => {
  return (
    <div className="view-employees1">
      <h2>Registered Employees</h2>
      <p>View the details of all registered employees.</p>
      <div className="filters">
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={(e) => setFilter(e.target.value)}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="support"
            checked={filter === 'support'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Support
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="se"
            checked={filter === 'se'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Engineering
        </label>
      </div>
      <div className="employee-list">
        <table>
          <thead>
            <tr>
              <th data-label="CI">CI</th>
              <th data-label="Name">Name</th>
              <th data-label="Surname">Surname</th>
              <th data-label="Email">Email</th>
              <th data-label="Actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee?._id} className="employee-item">
                  <td data-label="CI">{employee?.ci || 'Unknown'}</td>
                  <td data-label="Name">{employee?.name || 'Unknown'}</td>
                  <td data-label="Surname">{employee?.lastname || 'Unknown'}</td>
                  <td data-label="Email">{employee?.email || 'Unknown'}</td>
                  <td data-label="Actions">
                    <button onClick={() => handleDelete(employee?._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
