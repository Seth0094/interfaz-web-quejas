import { useState, useEffect } from 'react';
import { getSupports, getSEs, deleteEmployee } from '../../../services/adminService';
import AdminNavbar from '../../../components/authcomponent/navbar/Adminnavbar/Adminnavbar';
import EmployeeList from '../../../components/admincomponent/list/employeelist/employeelist';
import '../view-employee/view-employee.css';

const ViewEmployee = () => {
  const [supports, setSupports] = useState([]);
  const [ses, setSEs] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const supportData = await getSupports();
      const seData = await getSEs();
      setSupports(supportData || []); 
      setSEs(seData || []); 
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
      alert('Employee deleted successfully!');
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Error deleting employee');
    }
  };

  const filteredEmployees = () => {
    if (filter === 'support') {
      return supports;
    } else if (filter === 'se') {
      return ses;
    } else {
      return [...supports, ...ses];
    }
  };

  return (
    <>
      <AdminNavbar />
      <EmployeeList 
        employees={filteredEmployees()} 
        handleDelete={handleDelete} 
        filter={filter} 
        setFilter={setFilter} 
      />
    </>
  );
};

export default ViewEmployee;
