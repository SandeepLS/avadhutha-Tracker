import {BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import FirstComponent from './components/Main/FirstComponent';

function App() {
  return (
    <div className="App">
      
      <Router>
        <FirstComponent />
      </Router>

     
      
    </div>
  );
}

export default App;
