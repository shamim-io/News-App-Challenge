import './App.css';
import React from 'react'
import { NewsContextProvider } from './NewsContext'
import News from './Components/News'

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
