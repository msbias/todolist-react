import React from 'react';
import './style.css';
import List from './list.js';
import Item from './item.js';

export default function App() {
  const x = 5;
  let text = 'IT';

  return (
    <div id="app">
      <h1>To Do </h1>
      <List />
    </div>
  );
}
