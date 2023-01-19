import React, { useContext, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Paper, styled } from '@mui/material';
import NumbersList from './components/NumbersList';
import NumbersListProvider, { NumbersListContext } from './context/helpers/NumbersContext';

function App() {
  return (
    <div className="App">
      <NumbersListProvider>
        <NumbersList />
      </NumbersListProvider>
    </div>
  );
}

export default App;
