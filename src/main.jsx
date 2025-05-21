import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

// Create root element and render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire app with Redux Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
