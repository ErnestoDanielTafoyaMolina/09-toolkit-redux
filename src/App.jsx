import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import './App.css';

import { increment, decrement, incrementBy } from './store/slices/counter'

function App() {
  const { counter } = useSelector( state => state.counter );

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          decrement
        </button>
        <button onClick={ () => dispatch( incrementBy(2) ) }>
          increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
