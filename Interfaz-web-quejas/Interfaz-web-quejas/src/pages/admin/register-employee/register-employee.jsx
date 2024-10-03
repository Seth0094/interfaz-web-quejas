import React, { useState, useEffect } from 'react';
import { registerSupport, registerSE } from '../../../services/adminService';
import { addUserRole, getCitizenUsers } from '../../../services/authService';
import AdminNavbar from '../../../components/authcomponent/navbar/Adminnavbar/Adminnavbar';

import '../register-employee/register-employee.css'
import RegisterEmployeeForm from '../../../components/admincomponent/form/register-employee-form/register-employee-form';

const RegisterEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    lastname: '',
    ci: '',
    email: '',
    password: '',
    role: 'support',
  });

  const [existingUser, setExistingUser] = useState({
    user_id: '',
    role: 'support',
  });

  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    fetchCitizens();
  }, []);

  const fetchCitizens = async () => {
    try {
      const data = await getCitizenUsers();
      setCitizens(data);
    } catch (error) {
      console.error('Error fetching citizens:', error);
    }
  };

  const handleNewEmployeeChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleExistingUserChange = (e) => {
    setExistingUser({
      ...existingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewEmployeeSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newEmployee.role === 'support') {
        await registerSupport(newEmployee);
      } else {
        await registerSE(newEmployee);
      }
      alert('New employee registered successfully!');
    } catch (error) {
      console.error('Error registering new employee:', error);
      alert('Error registering new employee');
    }
  };

  const handleExistingUserSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUserRole(existingUser);
      alert('User role updated successfully!');
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Error updating user role');
    }
  };

  return (
    <>
      <AdminNavbar />
      <RegisterEmployeeForm 
        newEmployee={newEmployee} 
        handleNewEmployeeChange={handleNewEmployeeChange} 
        handleNewEmployeeSubmit={handleNewEmployeeSubmit} 
        existingUser={existingUser} 
        handleExistingUserChange={handleExistingUserChange} 
        handleExistingUserSubmit={handleExistingUserSubmit} 
        citizens={citizens} 
      />
    </>
  );
};

export default RegisterEmployee;
