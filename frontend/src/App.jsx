import React from 'react';
import Character from './components/Character.jsx';
import MessageContainer from './components/MessageContainer.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Character />
      <MessageContainer />
      <Footer /> 
    </div>
  )
}

export default App;