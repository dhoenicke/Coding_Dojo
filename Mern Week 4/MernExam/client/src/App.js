import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import NewPirate from './views/NewPirate';
import UpdatePirate from './views/UpdatePirate';
import ViewPirate from "./views/ViewPirate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewPirate />} />
        <Route path="/:id" element={<ViewPirate />} />
        <Route path="/edit/:id" element={<UpdatePirate />} />
      </Routes>
    </div>
  );
}

export default App;
