import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;