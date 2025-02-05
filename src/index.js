import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {ProductProvider} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);
reportWebVitals();
