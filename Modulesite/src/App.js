import React from 'react';
import './App.css';
import Top from './components/Top';
import Left1 from './components/Left1';
import Left2 from './components/Left2';
import Middle1 from './components/Middle1';
import Middle2 from './components/Middle2';


const App = () => {
  return (
    
    <div class='container'>
      <div>
      <Top />
      </div>

      <div class="maincont">

      <div class ="left">
      <Left1 />
      <Left2 />
      </div>

      <div class ="middle">
      <Middle1 />
      <Middle2 />
      
      </div>
      
      </div>

     
      
      </div>
  );
};

export default App;
