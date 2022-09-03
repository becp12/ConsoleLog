import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
  
  return (
    <main className="auth-page">
      { showSignUp ?
        <>
          <SignUpForm setUser={setUser} />
          <div className="login-signup-button">
            <p>Already have an account?</p>
            <button onClick={() => setShowSignUp(!showSignUp)}>LOG IN</button>
          </div>
        </>
        :
        <>
          <LoginForm setUser={setUser} />
          <div className="login-signup-button">
            <p onClick={() => setShowSignUp(!showSignUp)}>Don't have an account?</p>
            <button onClick={() => setShowSignUp(!showSignUp)}>SIGN UP</button>
          </div>
        </>
      }
    </main>
  );
}