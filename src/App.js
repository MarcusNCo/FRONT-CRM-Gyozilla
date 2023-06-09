import logo from './images/Sans_titre-1_105_copie.png';
import Products from './pages/products/Products';
import './App.css';
import Log from './pages/log/Log';
import CustomInput from './components/input/CustomInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Log/>
    </div>
  );
}

export default App;
