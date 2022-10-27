import './App.css';
import PersonComponent from './components/personcard';

function App() {
  return (
    <div className="App">
      <PersonComponent personsName={"Doe, Jane"} age={45}>
        <p>Hair Color: Black</p>
      </PersonComponent>
      <PersonComponent personsName={"Smith, John"} age={88}>
        <p>Hair Color: Brown</p>
      </PersonComponent>
    </div>
  );
}

export default App;
