import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux';
import CounterComponent from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple counter</h1>
      </header>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
     
    </div>
  );
}
export default App;
