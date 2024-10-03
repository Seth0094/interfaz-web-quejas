

const ProfileSupportForm = ({ profile, handleChange, handleSubmit, handleLogout }) => {
  return (
    <div className="profile-container">
      <h2> Profile</h2>
      <p>Update your profile information.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text" 
            id="name"
            name="name"
            value={profile.name}
            readOnly
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Surname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={profile.lastname}
            readOnly
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
          <small>Leave blank to keep the current password</small>
        </div>
        <div className="button-container">
          <button type="submit">Update Profile</button>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSupportForm;
