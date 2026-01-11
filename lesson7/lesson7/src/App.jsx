import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const isloginLocal = JSON.parse(
    localStorage.getItem('isAuthenticated') || 'false'
  );
  const [isAuthenticated, setIsAuthenticated] = useState( isloginLocal || false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        isSignUp ? (
          <SignUpForm onBackToLogin={() => setIsSignUp(false)} />
        ) : (
          <LoginForm
            onLoginSuccess={() => setIsAuthenticated(true)}
            onSwitchToSignUp={() => setIsSignUp(true)}
          />
        )
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated}
            onLogout={() => {
              setIsAuthenticated(false);
              localStorage.setItem('isAuthenticated', JSON.stringify(false));
            }}
          />
          <Body />
        </>
      )}

    </>
  );
}

export default App;
