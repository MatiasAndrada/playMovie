import React from 'react';
import './styles/App.scss';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar/NavBar';
import Search from './components/NavBar/Search';


const stock = 10;
const initial = 1;
function App() {
  return (
    <div className="App">
      <NavBar />
      <Search/>

      
      <ItemCount 
      stock={stock}
      initial={initial}
      />
    </div>
  );
}
 
export default App;
