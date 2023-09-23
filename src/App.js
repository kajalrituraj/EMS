
import './App.css';
import Card from './payroll/card.js'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginForm from './component/logg';

function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Card />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>

    // <div className="App">
    
    //  <Card/>
    //   <LoginForm/>
    // </div>
  );
}

export default App;
