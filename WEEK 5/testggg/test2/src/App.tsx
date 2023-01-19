import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from 'process';
import { Button, Input } from '@mui/material';
import TheCard, { CardDetails } from './components/TheCard';
import MyComp from './components/MyComponent';
import CompTwo from './components/ComponentTwo';
import CompThree from './components/ComponentThree';
import SessionThree from './components/SessionThree';
import Patuti from './components/Patuti';
import TheCardList from './components/TheCardList';
import TheCardSummary from './components/TheCardSummary';
import CardListProvider from './helpers/contexts/CardContext';


function App() {
  
  const clickHandler = (event: React.MouseEvent, num: number) => {
    console.log(event.target + " -- " + num);
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const clickHandlerTwo = () => {
    alert("From App.tsx");
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*<Patuti/>
        <SessionThree></SessionThree>
         <Button variant="contained" onClick={
          (e) => {clickHandler(e,101)}
          }>Click Me!</Button>
        <Input onChange={changeHandler}/>
        <CompThree>
          <CompTwo daysoftheweek='Monday' clickEvent={clickHandlerTwo}>Hello World</CompTwo>
          <CompTwo daysoftheweek='Tuesday' clickEvent={clickHandlerTwo}>From the other side!</CompTwo>
        </CompThree>
        <MyComp name="Comp 1" description='Something something'/>
        <TheCard title="Lizard" description='Lizard Seems Unhappy' image='/images/contemplative-reptile.jpg'/>
        <TheCard title="Iguana Lagi" description='Iguana Alawi Seems Unhappy' image='/images/contemplative-reptile.jpg'/>
        */}
        <Button variant='contained'>Test</Button>
        <CardListProvider>
          
          <TheCardList/>
        </CardListProvider>

      </header>
    </div>
  );

}


export default App;
