import React from 'react';

const RegisterEmployeeForm = ({ 
  newEmployee, 
  handleNewEmployeeChange, 
  handleNewEmployeeSubmit, 
  existingUser, 
  handleExistingUserChange, 
  handleExistingUserSubmit, 
  citizens 
}) => {
  return (
    <div className='register-employee3'>
      <div className="register-employee">
        <h2>Employee Registration</h2>
        <p>Enter the data of the support and engineering personnel.</p>
        <form onSubmit={handleNewEmployeeSubmit}>
          <div className="form-group">
            <label htmlFor="ci">CI</label>
            <input
              type="text"
              id="ci"
              name="ci"
              placeholder="Enter the ID number"
              value={newEmployee.ci}
              onChange={handleNewEmployeeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name"
              value={newEmployee.name}
              onChange={handleNewEmployeeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Surname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter the surname"
              value={newEmployee.lastname}
              onChange={handleNewEmployeeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter the email"
              value={newEmployee.email}
              onChange={handleNewEmployeeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter the password"
              value={newEmployee.password}
              onChange={handleNewEmployeeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={newEmployee.role} onChange={handleNewEmployeeChange}>
              <option value="support">Support</option>
              <option value="se">Engineering</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

      <div  className="register-employee2">
        <h2> Employee Registration with a Existing User</h2>
        <p> select the citizen user to assign employee permissions.</p>
        <form onSubmit={handleExistingUserSubmit}>
          <div className="form-group">
            <label htmlFor="user_id">User</label>
            <select
              id="user_id"
              name="user_id"
              value={existingUser.user_id}
              onChange={handleExistingUserChange}
              required
            >
              <option value="">Select a user</option>
              {citizens.map((citizen) => (
                <option key={citizen._id} value={citizen._id}>
                  {citizen.email}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={existingUser.role} onChange={handleExistingUserChange}>
              <option value="support">Support</option>
              <option value="se">Engineering</option>
            </select>
          </div>
          <button type="submit">Assign Role</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEmployeeForm;
