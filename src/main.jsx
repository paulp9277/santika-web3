import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css'
import { AuthProvider } from './context/AuthContext.jsx';
import { useAuth } from './context/AuthContext.jsx';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <AuthProvider>
  <BrowserRouter>
  <ScrollToTop/>
  <App />
  </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>
)