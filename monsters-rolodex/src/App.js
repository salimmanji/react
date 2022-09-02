import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, []);


  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  const onTitleChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setTitle(searchString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
      <br />
      <SearchBox onChangeHandler={onTitleChange} placeholder='set title' className='title-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }));
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchString }
//     });
//   }

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
