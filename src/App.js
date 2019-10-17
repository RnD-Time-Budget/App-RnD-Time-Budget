import React from 'react';
import './App.css';
import BudgetItem from './budgetItem/BudgetItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RnD Time Buget</h1>
        <BudgetItem />
      </header>
    </div>
  );
}

export default App;
