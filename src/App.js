import React from 'react';
import './styles/App.scss';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/Movies/MovieList'




const stock = 10;
const initial = 1;
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount 
      stock={stock}
      initial={initial}
      />

      <MovieList/>

    </div>
  );
}
export default App;
