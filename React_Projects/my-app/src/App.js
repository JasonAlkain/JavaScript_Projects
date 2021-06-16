import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bg-light-gray">
          <h1>React App</h1>
          <h3>A brighter future.</h3>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Learn more with the link below.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
