import { useState } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');    //[ value, setValue ]
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)

  }


  return (
    <div className="App" >
      <h1 className='app-title'>Monster Rodolex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monster-search-box' />
      {/* <Cardlist monsters={filteredMonsters} /> */}
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           },
//           // () => {
//           //   console.log(this.state)
//           // }
//         ))
//   }




//   render() {
//     // console.log('render from app js')
//     // Object destructuring (ES6)
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//   }


// }

export default App;
