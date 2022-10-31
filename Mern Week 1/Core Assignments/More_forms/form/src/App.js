import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Errors from './components/Errors';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Errors data={state} />
    </div>
  );
}

export default App;