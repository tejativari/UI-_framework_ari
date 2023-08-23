import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // For toggling between login and signup
  const [firstName, setFirstName] = useState(''); // For signup
  const [lastName, setLastName] = useState('');   // For signup
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Perform login logic here
      console.log('Logging in with', email, password);
    } else {
      // Perform signup logic here
      console.log('Signing up with', firstName, lastName, email, password);
    }
  };

  return (
    <div className="App">
      <div className="auth-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isLogin && showForgotPassword && (
            <p className="forgot-password">Forgot your password? Click here</p>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </p>
      </div>
    </div>
  );
}

export default App;
