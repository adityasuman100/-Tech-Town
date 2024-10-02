import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // Choose the pixel-art style for a cartoon representation
  const avatarStyle = 'pixel-art'; 
  const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${user ? user._id : 'default'}`; // Generate avatar URL based on user ID

  return (
    <section style={containerStyle}>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      
      {/* Flexbox container for image and text */}
      <div style={flexContainerStyle}>
        <div style={imageContainerStyle}>
          {/* Pixel art avatar instead of the welcome image */}
          <img src={avatarUrl} alt={user ? user.name : 'User Avatar'} style={imageStyle} />
        </div>
        
        <div style={textContainerStyle}>
          <h2 style={welcomeMessageStyle}>Welcome to the Tech Town Family!</h2>
          <p style={instructionMessageStyle}>Create your profile to get started.</p>
        </div>
      </div>

      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet set up a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);

// Inline styles
const containerStyle = {
  width: '80%', // Container takes 85% of the width
  marginLeft: '20%', // Shift the entire container 15% to the left
  padding: '20px',
  marginTop:'70px' // Optional: padding for the content inside the container
};

const flexContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 0',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9', // Light background to highlight the image and text
};

const imageContainerStyle = {
  flex: '0 0 auto', // Prevent the image container from growing
  marginRight: '20px', // Spacing between the image and text
};

const imageStyle = {
  width: '100px',  // Adjusted size for the pixel art avatar
  height: '100px', // Adjusted size for the pixel art avatar
  borderRadius: '10px', // Rounded corners for the image
  objectFit: 'cover', // Ensures the image covers the area without distortion
  border: '2px solid #007bff', // Optional border to make it pop
};

const textContainerStyle = {
  flex: '1', // Allow text container to grow
};

const welcomeMessageStyle = {
  fontSize: '1.5rem', // Kept font size for the welcome message
  color: '#333', // Darker color for better visibility
  marginTop: '0', // Reset margin for consistency
};

const instructionMessageStyle = {
  fontSize: '1.1rem', // Kept font size for clarity
  color: '#666', // Lighter color for the instruction text
  marginTop: '5px',
  lineHeight: '1.5', // Better line spacing
};
