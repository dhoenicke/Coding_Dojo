import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from "react-router-dom";
import AllProducts from './components/AllProducts';
import DisplayedProduct from "./components/DisplayedProduct";
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllProducts/>} />
        <Route path="/product/:id" element={<DisplayedProduct/>} />
        <Route path="/product/addproduct" element={<AddProduct/>} />
      </Routes>
    </div>
  );
}

export default App;