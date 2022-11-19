import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: {
    //     firstName: 'Newson',
    //     lastName: 'Thokchom',
    //   },
    //   company: 'Lamzing Technologies Pvt.Ltd.'
    // }
    this.state = {
      monsters: [
        {
          id: '1',
          name: 'Linda',
        },
        {
          id: '2',
          name: 'Frank',
        },
        {
          id: '3',
          name: 'Jacky',
        }
      ]

    }

  }

  render() {
    return (
      <div className="App" >
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }



}

export default App;
