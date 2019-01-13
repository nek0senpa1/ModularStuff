import React from 'react';
import './App.css';
import Top from './components/Top';
import Left1 from './components/Left1';
import RegNum, { BigNum } from './components/ButtonComponents/NumberButton';
import Oper from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class='container'>

      <Top />
      <div class ="left">
      <Left1 class = "lefty" />

      </div>
      

     
      
    </div>
  );
};

export default App;
