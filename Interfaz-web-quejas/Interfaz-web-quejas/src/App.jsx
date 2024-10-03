
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import SocketProvider from './context/SocketProvider';

//auth import
import MainScreen from './pages/auth/mainscreen/mainscreen';
import Login from './pages/auth/login/Login';
import ForgotPassword from './pages/auth/forgotpassword/forgotpassword';
//admin import
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import ViewComplaints from './pages/admin/view-all-complaint/ViewComplaint';
import RegisterEmployee from './pages/admin/register-employee/register-employee';
import ViewEmployee from './pages/admin/view-employee/view-employee';
import AdminProfile from './pages/admin/profile-admin/profile-admin';
//support import
import SupportDashboard from './pages/support/dashboard-all-complaint/SupportDashboard';
import ViewComplaintsSupport from './pages/support/view-all-complaint-support/view-all-complaint-support';
import ViewSE from './pages/support/view-se/view-se';
import SupportProfile from './pages/support/profile-support/profile-support';
//se import
import SystemEngineerDashboard from './pages/se/dashboard-assigned-complaint/SystemEngineerDashboard';
import ViewAssignedComplaint from './pages/se/view-assigned-complaint/view-assigned-complaint';
import ViewSentResponses from './pages/se/view-sent-responses/view-sent-responses';
import SEProfile from './pages/se/profile-se/profile-se';


import ResetPassword from './pages/auth/resetpassword/resetpassword';



const App = () => {


  return (
    <SocketProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/admin-dashboard" element={<PrivateRoute roles={['admin']} component={AdminDashboard} />} />
            <Route path="/view-all-complaints-admin" element={<PrivateRoute roles={['admin']} component={ViewComplaints} />} />
            <Route path="/register-employee" element={<PrivateRoute roles={['admin']} component={RegisterEmployee} />} />
            <Route path="/view-employee" element={<PrivateRoute roles={['admin']} component={ViewEmployee} />} />
            <Route path="/profile-admin" element={<PrivateRoute roles={['admin']} component={AdminProfile} />} />

            <Route path="/support-dashboard" element={<PrivateRoute roles={['support']} component={SupportDashboard} />} />
            <Route path="/view-all-complaints-support" element={<PrivateRoute roles={['support']} component={ViewComplaintsSupport} />} />
            <Route path="/view-se" element={<PrivateRoute roles={['support']} component={ViewSE} />} />
            <Route path="/profile-support" element={<PrivateRoute roles={['support']} component={SupportProfile} />} />


            <Route path="/system-engineer-dashboard" element={<PrivateRoute roles={['se']} component={SystemEngineerDashboard} />} />
            <Route path="/view-assigned-complaint" element={<PrivateRoute roles={['se']} component={ViewAssignedComplaint} />} />
            <Route path="/view-sent-responses" element={<PrivateRoute roles={['se']} component={ViewSentResponses} />} />
            <Route path="/profile-se" element={<PrivateRoute roles={['se']} component={SEProfile} />} />

          </Routes>



        </Router>
      </AuthProvider>
    </SocketProvider>
  );
};

export default App;