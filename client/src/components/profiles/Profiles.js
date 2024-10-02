import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  // State to store search term
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter profiles based on the search term
  const filteredProfiles = profiles.filter((profile) =>
    profile.user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          {/* Flexbox container for text and search bar */}
          <div style={topBarStyle}>
            <p className="lead" style={{ marginBottom: 0 }}>
              <i className="fab fa-connectdevelop" /> Browse and connect with developers
            </p>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search developers by name"
              value={searchTerm}
              onChange={handleSearch}
              style={searchBarStyle}
            />
          </div>

          {/* Profiles */}
          <div className="profiles">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);

// Optional inline styles for layout
const topBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
};

const searchBarStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  width: '300px' // Adjust width as needed
};
