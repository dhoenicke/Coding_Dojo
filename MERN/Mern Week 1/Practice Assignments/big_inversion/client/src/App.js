import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastname = {"Doe,"} firstname = {"Jane"} age = {45} haircolor = {"Black"}/>
      <PersonCard lastname = {"Smith,"} firstname = {"John"} age = {88} haircolor = {"Brown"}/>
      <PersonCard lastname = {"Fillmore,"} firstname = {"Millard"} age = {50} haircolor = {"Brown"}/>
    </div>
  );
}

export default App;
