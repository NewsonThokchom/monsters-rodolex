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
      company: 'Lamzing Technologies Pvt.Ltd.'
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

              // first function is the updater function - passing a function that returns object i.e, name:{...},company:'..'
              // second function is the callback function

              // state variable is equal to the current state but second callback function is optional
              // second function ie, callback function is going to run only after all of the state changes have been applied
              this.setState((state, props) => {
                return { name: { firstName: 'Lone', lastName: 'Coder' }, company: 'LoneCoder YT' }
              }, () => {
                console.log(this.state) // this will print the updated state
              })

              console.log(this.state) // this will print the current state

            }}
          >Change Name</button>
        </header>
      </div >
    );
  }



}

export default App;
