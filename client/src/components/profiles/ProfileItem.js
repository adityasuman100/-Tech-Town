import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    status,
    company,
    location,
    skills
  }
}) => {
  // Choose the pixel-art style for a cartoon representation
  const avatarStyle = 'pixel-art'; // Change this to 'avataaars' if you prefer
  const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${_id}`; // or use name as seed

  return (
    <div className='profile bg-light'>
      <img src={avatarUrl} alt={name} className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
