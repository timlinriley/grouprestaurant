import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Form from './components/Form';
import Display from './components/Display';
import {useState, useEffect} from 'react';
import Meals from './components/Meals';
import axios from 'axios';



function App() {
  const [meal, setMeal] = useState({});
  const [result, setResult] = useState ([]);
  const getMeal = async (searchterm) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchterm}`)
   
    // axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${searchterm}`);
    const data = await response.json();
    setMeal(data);
    setResult(data.meals.map(element =>{
      return <Meals mealName={element} />

  
    }));

  }
console.log(meal)

  return (
    <div className="App">
      <Header />
      <Nav />
      <Form mealsearch={getMeal}/>
      <Display meal={result}/>
    </div>
  );
}

export default App;
