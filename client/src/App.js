import {BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import FirstComponent from './components/Main/FirstComponent';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      
      <Router>
        <FirstComponent />
        <AllRoutes />
      </Router>
      
     
      
    </div>
  );
}

export default App;
