import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import JobHistory from './Job/JobHistory';
import Portfolio from './Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Header/>
      <Home />
      <JobHistory/>
      <Portfolio/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
