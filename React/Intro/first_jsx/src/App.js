import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
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
    </div>
  );
} */

class App extends Component {
    render() {
        return(
            <>
                <h1>Hello Dojo!</h1>
                <h2>Things I Need To Do</h2>
                <ul>
                    <li>React Assignments</li>
                    <li>Resume</li>
                    <li>LinkedIn Outreach</li>
                    <li>Clean Stuff</li>
                </ul>
            </>
        );
    };
}

export default App;
