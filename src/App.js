import React from 'react';
import './styles/App.scss';
import Header from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <pushItems />
      </div>

    </div>
  );
}

export default App;
