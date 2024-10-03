import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile, logout } from '../../../services/authService';
import AdminNavbar from '../../../components/authcomponent/navbar/Adminnavbar/Adminnavbar';
import '../profile-admin/profile-admin.css';
import ProfileAdminForm from '../../../components/authcomponent/form/profile-form/profile-admin-form';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getUserProfile();
      setProfile({ ...data, password: '' });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await updateUserProfile(profile);
      alert('Profile updated successfully!');
      setProfile({ ...updatedProfile, password: '' });
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login'; // Redirigir al usuario a la página de login
  };

  return (
    <>
      <AdminNavbar />
      <ProfileAdminForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default AdminProfile;
