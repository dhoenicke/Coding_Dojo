import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Router, Routes } from "react-router-dom";
import Main from './views/Main';
import ViewProduct from './views/ViewProduct'
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products"/>
        <ViewProduct path="/products/:id"/>
        <UpdateProduct path="/products/:id/edit"/>
        <Routes from="/" to="/products" noThrow="true"/>
      </Router>
    </div>
  );
}

export default App;