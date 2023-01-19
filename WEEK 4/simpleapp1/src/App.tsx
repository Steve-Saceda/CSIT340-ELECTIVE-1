import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBarDrawer from './components/appBarDrawer';
import MyTable, { Data } from './components/MyTable';
import TextField, { TextFieldProps } from '@mui/material/TextField/TextField';
import { Button, TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import Mydata from './components/MyData';
import DataListProvider from './helper/DataContext';
import RestExample from './components/RestExample';



function App() {
  return (
    <div className="App">
      {/*<RestExample/>*/}
      <header>
        <div>
          <MyAppBarDrawer title='My Simple Notes App'></MyAppBarDrawer>
        </div>
      </header>
      <div style={{ margin: "50px", marginTop: "100px" }}>
        <DataListProvider>
          <MyTable />
        </DataListProvider>
  </div> 
    </div>
  );
}

export default App;
