import  { useState } from 'react';
import { sendResetPasswordEmail } from '../../../services/authService';
import ForgotPasswordForm from '../../../components/authcomponent/form/forgotpassword-form/forgotpassword-form';
import LoginNavbar from '../../../components/authcomponent/navbar/Loginnavbar/Loginnavbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await sendResetPasswordEmail(email);
      setMessage('An email with password reset instructions has been sent to your email address.');
    } catch (err) {
      setMessage('Error sending email. Please try again.');
    }
  };

  return (
    <>
      <LoginNavbar />
      <div className="forgot-password-page">
        <ForgotPasswordForm
          email={email}
          setEmail={setEmail}
          handleForgotPassword={handleForgotPassword}
          message={message}
        />
      </div>
    </>
  );
};

export default ForgotPassword;
