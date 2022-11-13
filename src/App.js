import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Newson',
        lastName: 'Thokchom',
      },
      company: 'Lamzing Technologies'
    }

  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>

          <button
            onClick={() => {
              this.setState({ name: { firstName: 'Lone', lastName: 'Coder' }, company: 'LoneCoder YT' })
            }}
          >Change Name</button>
        </header>
      </div >
    );
  }



}

export default App;
