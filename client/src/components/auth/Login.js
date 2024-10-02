import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


// Array of 60 best quotes ever
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "The best way to predict the future is to create it. – Peter Drucker",
  "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "The best revenge is massive success. – Frank Sinatra",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. – Jimmy Dean",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
  "The mind is everything. What you think you become. – Buddha",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "The harder I work, the luckier I get. – Samuel Goldwyn",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
  "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "In three words I can sum up everything I've learned about life: It goes on. – Robert Frost",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. – Dr. Seuss",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Too many of us are not living our dreams because we are living our fears. – Les Brown",
  "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti",
  "It is never too late to be what you might have been. – George Eliot",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. – Mark Twain",
  "Happiness is not by chance, but by choice. – Jim Rohn"
];



const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  // Random quote selection
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="container" style={containerStyle}>
      {/* Quote of the Day */}
      <h2 style={quoteHeadingStyle}>Quote of the Day</h2>
      <h1 style={quoteStyle}>{randomQuote}</h1>

      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

// Inline styles
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center'
};

const quoteHeadingStyle = {
  fontSize: '1.5rem',
  color: '#333333', // Lighter black for the heading
  marginBottom: '10px', // Spacing below the heading
  marginTop: '50px'
};

const quoteStyle = {
  fontSize: '1.3rem', // Slightly larger for emphasis
  color: '#333333', // Changed to a lighter black for the quote
  marginBottom: '20px', // Spacing below the quote
  marginTop: '10px', // Top margin for spacing
  fontFamily: "'Dancing Script', cursive", // Stylish font
  lineHeight: '1.5', // Increased line height for better readability
  fontWeight: 'normal', // Ensure text is not bold
};
