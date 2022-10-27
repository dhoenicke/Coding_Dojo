import './App.css';
import PersonComponent from './components/personcard';

function App() {
  return (
    <div className="App">
      <PersonComponent personsName={"Doe, Jane"} age={45}>
        <p>Age: 45</p>
        <p>Hair Color: Black</p>
      </PersonComponent>
      <PersonComponent personsName={"Smith, John"}>
        <p>Age: 88</p>
        <p>Hair Color: Brown</p>
      </PersonComponent>
      <PersonComponent personsName={"Fillmore, Millard"}>
        <p>Age: 50</p>
        <p>Hair Color: Brown</p>
      </PersonComponent>
      <PersonComponent personsName={"Smith, Maria"}>
        <p>Age: 62</p>
        <p>Hair Color: Brown</p>
      </PersonComponent>
    </div>
  );
}

export default App;
