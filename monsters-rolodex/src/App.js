import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstname: 'SMP', lastname: 'SSS' },
      company: 'ZTM',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState((state, props) => {
              return { name: { firstname: 'ABC', lastname: 'DEF' } }
            },
              () => { console.log(this.state); })
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
