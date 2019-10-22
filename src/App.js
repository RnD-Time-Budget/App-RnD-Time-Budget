import React from 'react';
import './App.css';
import BudgetItem from './components/budget/budgetItem';
import MainNav from './components/mainNav/mainNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
        <h1>RnD Time Buget</h1>
        <BudgetItem />
      </header>
    </div>
  );
}

export default App;
