// src/App.js
import React from 'react';
import './App.css';
import CalendarComponent from './Calendar';

const App = () => {
  return (
    <div className="container">
      <h1>Event Calendar</h1>
      <CalendarComponent />
    </div>
  );
};

export default App;
