import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductForm from "./components/productForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductForm />} />
        <Route path="/products/:id" />
        <Route path="/products/:id/edit" />
        <Route from="/" to="/products" noThrow="true" />
      </Routes>
    </div>
  );
}

export default App;