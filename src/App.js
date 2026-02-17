import logo from './resources/logo.svg';
import './App.css';

import Header from './components/header';
import Box from './components/box';

function App() {
  return (
   
    <div className="App">
      <Header />
      <div className="App-content">
        <Box />
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
      </div>
    </div>
  );
}

export default App;
