import React, {useState} from 'react';
import './App.css';
import Landingpage from './Components/LandingPage';
import { AdDataContext } from './Context';


function App() {
  const [categoryValue, setCategoryValue] = useState([]);
  const [monthlyBudget, setMonthelyBudget] = useState(200)
  const [leadValue, setLeadValue] = useState(10)
  return (
    <div className="App">
      <AdDataContext.Provider value={{categoryValue, setCategoryValue,monthlyBudget, setMonthelyBudget , leadValue, setLeadValue }}>
      <Landingpage/>
      </AdDataContext.Provider>
    </div>
  );
}

export default App;
