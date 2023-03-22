import logo from './images/Sans_titre-1_105_copie.png';
import Products from './pages/products/Products';
import './App.css';
import Footer from './components/footer/Footer';
// import Log from './pages/log/Log';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" sx={{ width: '100vh' }} />
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
      {/* <Log /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
