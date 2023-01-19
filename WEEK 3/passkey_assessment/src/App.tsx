import React, { ReactHTMLElement, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { height } from '@mui/system';
import { useState } from 'react';



function App() {
  const [num, setNum] = useState('');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [pass, setPass] = useState('');
  const reset = '';
  const resetC1 = 0;
  const resetC2 = 0;

  useEffect(() => {
    if((count1!=0 && count2!=0)){
      if(count1 == count2)
        onCheck();
    }
 });

  const onPassChange = (e: any) => {
    setPass(pass + e.target.value);
    setCount1(count1 + 1);
    console.log(count1 +1);
    
  }
  const changeHandler = (event: any) => {    
    setNum(event.target.value);
    setCount2(event.target.value.length);
    console.log(count2);
  }

  function onCheck(){
      if(pass != num){
        alert("Try again! Passkey is "+ num + ", Combo inputted is "+ pass);
      }else{
        alert("Congratulations! Successfully Unlocked!");
      }
      setPass(reset);
      setCount1(resetC1);
      
    
    
  }
 
  return (
    <div className="App">
      <div>
        <div className ="Container">
          <div className='txtfld'>
            <TextField onChange={changeHandler} className="txt" id="outlined-basic" label="Passkey" variant="outlined"/>
          </div>
          <div className="row">
            <div className='btngroup'>
              <Button variant="contained" size='large'sx={{m: .1}} value = {1} onClick={onPassChange}>1</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {2} onClick={onPassChange}>2</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {3} onClick={onPassChange}>3</Button>
            </div>
          </div>
          <div className='row'>
            <div>
              <Button variant="contained" size='large'sx={{m: .1}} value = {4} onClick={onPassChange}>4</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {5} onClick={onPassChange}>5</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {6} onClick={onPassChange}>6</Button>
            </div>
          </div>
          <div className='row'>
            <div>
              <Button variant="contained" size='large'sx={{m: .1}} value = {7} onClick={onPassChange}>7</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {8} onClick={onPassChange}>8</Button>
              <Button variant="contained" size='large'sx={{m: .1}} value = {9} onClick={onPassChange}>9</Button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
