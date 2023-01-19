import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccordionComp from './components/accordionComponent';
import CustomComp from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomComp name={'Steve Wilben R. Saceda'} 
        course_and_year={'BSIT-3'} email={'stevewilben.saceda@cit.edu'} 
        school={'Cebu Institute of Technology University'} 
        image={'/images/profile.jpg'}></CustomComp>
        <AccordionComp></AccordionComp>
      </header>
    </div>
  );
}

export default App;
