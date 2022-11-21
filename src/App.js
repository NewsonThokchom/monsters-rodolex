import './App.css';
import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          // () => {
          //   console.log(this.state)
          // }
        ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }


  render() {
    // console.log('render from app js')
    // Object destructuring (ES6)
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App" >
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })
        } */}

        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monster-search-box' />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }


}

export default App;
