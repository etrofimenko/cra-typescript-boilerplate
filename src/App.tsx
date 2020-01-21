import React from 'react';
import PasswordForm from './components/PasswordForm/index';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordForm />
      </header>
    </div>
  );
};

export default App;
