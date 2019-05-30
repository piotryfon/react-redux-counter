import React from 'react';
import './App.css';
import Counter from './components/Counter';
import store from './store/store';

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
