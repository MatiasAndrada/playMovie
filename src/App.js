import React from 'react';
import './styles/App.scss';
import Header from './components/Navbar';
import PushItems from './components/PushProduct';


function App() {
  return (
    <div className="App">
      <Header />
      
      <PushItems />

    </div>
  );
}

export default App;
