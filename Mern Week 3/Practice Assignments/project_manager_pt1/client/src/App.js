import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Redirect } from "react-router-dom";
import Main from './views/Main';
import ViewProduct from './views/ViewProduct';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Main path="/products" />
        <ViewProduct path="/products/:id" />
        <UpdateProduct path="/products/:id/edit"/>
        <Redirect from="/" to="/products" noThrow="true" />
      </Routes>
    </div>
  );
}

export default App;
