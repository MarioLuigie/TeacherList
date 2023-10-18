import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import TeacherProvider from "./context/teacherContext";

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeacherProvider>
      <App />
    </TeacherProvider>
  </React.StrictMode>,
)
