import React from 'react';
import './Static/App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/AppBody/Sidebar';

function App() {
  return (
    <div className="App">
      {/* -------------------------------------------------------- */}
      <Header />
      {/* -------------------------------------------------------- */}
      <div className="app__body">
      {/* -------------------------------------------------------- */}
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
