import React from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple counter</h1>
      </header>
      <Counter />
    </div>
  );
}
export default App;
