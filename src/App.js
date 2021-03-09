import React,{useState} from "react";
import Cards from "./Cards";
import "./App.css";
const App = () => {
  const [numbers,setNumbers]=useState([]);
  while(numbers.length!==6){
    let x=Math.random()*6+1;
    if(numbers.indexOf(x)===-1){
      setNumbers([...numbers,x]);
    }
  }
  console.log(numbers)
  return <div>
    <Cards/>
    
  </div>
};

export default App;
