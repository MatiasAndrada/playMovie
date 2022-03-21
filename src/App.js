import React from 'react';
import './styles/App.scss';
import Header from './components/Navbar';
import ItemCount from './components/ItemCount';
import ArrayPrdt from './components/Products/Products';

const stock = 10;
const initial = 1;
function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'>
      <ArrayPrdt/>
      </div>
      <ItemCount 
      stock={stock}
      initial={initial}
      />
    </div>
  );
}

export default App;
