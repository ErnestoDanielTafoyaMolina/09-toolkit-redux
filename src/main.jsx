import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
// import { PokemonApp } from './PokemonApp';
import { store } from './store'

import './index.css'
// import { TodosApp } from './TodosApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
      {/* <PokemonApp /> */}
      {/* <TodosApp /> */}
    </Provider>
  </React.StrictMode>
)
