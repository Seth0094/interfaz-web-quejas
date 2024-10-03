
import AdminNavbar from '../../../components/authcomponent/navbar/Adminnavbar/Adminnavbar';
import './AdminDashboard.css'


const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar/>
      
      <main  className="containerAdminDashboard">
        <h1>Admin Dashboard</h1>
        <p1>Welcome to the admin dashboard!</p1>
      </main>
    </>
  );
};

export default AdminDashboard;
