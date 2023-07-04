import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderAll() {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch} />
      </Provider>
    </React.StrictMode>
  );
}

renderAll();
store.subscribe(renderAll);

reportWebVitals();

