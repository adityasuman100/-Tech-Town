import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0', // Adjusted padding for less space
    position: 'relative', // Ensure it sits at the bottom of the content
    bottom: 0, // Aligns it to the bottom of the page
    marginTop: 'auto', // Push it down if needed
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linksStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  };

  const linkItemStyle = {
    margin: '0 15px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const socialStyle = {
    marginTop: '10px',
  };

  const socialLinkStyle = {
    color: '#fff',
    margin: '0 10px',
    fontSize: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h4>TechTown</h4>
        <p>Connecting developers and building a strong community</p>

        <ul style={linksStyle}>
          <li style={linkItemStyle}>
            <Link to="/about" style={linkStyle}>About Us</Link>
          </li>
          <li style={linkItemStyle}>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
          <li style={linkItemStyle}>
            <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>
          </li>
        </ul>

        <div style={socialStyle}>
          <a href="https://twitter.com" style={socialLinkStyle}><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com" style={socialLinkStyle}><i className="fab fa-facebook"></i></a>
          <a href="https://linkedin.com" style={socialLinkStyle}><i className="fab fa-linkedin"></i></a>
        </div>

        <p>© {new Date().getFullYear()} TechTown. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
