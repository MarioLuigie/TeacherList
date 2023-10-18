import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App.jsx';
import TeacherProvider from "./context/teacherContext";

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TeacherProvider>
        <App />
      </TeacherProvider>
    </Router>
  </React.StrictMode>,
)
