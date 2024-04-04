//sets up Navigation and LoginForm components to be called via root

import './App.css';
import Navigation from './components/navigation';
import LoginForm from './components/login-form';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;