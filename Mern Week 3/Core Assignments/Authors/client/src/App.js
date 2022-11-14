import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import ViewAuthor from './views/ViewAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/new' element={<NewAuthor/>} />
        <Route path='/:id' element={<UpdateAuthor/>} />
        <Route path='/edit/:id' element={<ViewAuthor/>} />
      </Routes>
    </div>
  );
}

export default App;
