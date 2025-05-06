import React from 'react';
import Character from './components/Character';
import MessageContainer from './components/MessageContainer';
import Footer from './components/Footer'; // Імпорт компонента Footer
import './App.css';

function App() {
  return (
    <div className="app">
      <Character />
      <MessageContainer />
      <Footer /> {/* Додаємо компонент Footer */}
    </div>
  );
}

export default App;