import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[age,setAge]=useState(20);
  const[phone,setPhone]=useState(1234567890);
  return (
    <>
    <h1>This is a simple program on JSX! </h1>
    <h1>We have a variable called age with its value {age}. And a phone number is {phone}</h1>
    
    </>
    
  );
}

export default App;
