import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { LocalStorageProvider } from './context/local-storage-context';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LocalStorageProvider>
          <App />
        </LocalStorageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
