import React, { ReactComponentElement, ReactHTMLElement, ReactNode, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { height } from '@mui/system';
import { useState } from 'react';




function App() {
  
  let colors: Array<string>;
  colors = ['red', 'orange', 'yellow', 'yellowgreen', 'lightgreen', 'skyblue', 'blue', 'violet', 'pink'];

  let colors1: Array<string>;
  colors1 = ['red', 'orange', 'yellow', 'yellowgreen', 'lightgreen', 'skyblue', 'blue', 'violet', 'pink'];

  let color1roll: Array<string>;
  color1roll = ['red', 'grey'];

  let color2roll: Array<string>;
  color2roll = ['orange', 'grey'];

  var numbers: Array<number>
  numbers = [0, 1];

  var numbers2: Array<number>
  numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  

  const [startRollbtn, setStartRollbtn] = useState("Start Roll");

  const [currentMove, setCurrentMove] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bool, setBool] = useState(false)

  const [redctr, setRedctr] = useState(0)
  const [orangectr, setOrangectr] = useState(0)
  const [yellowctr, setYellowctr] = useState(0)
  const [yellowgreenctr, setYellowgreenctr] = useState(0)
  const [lightgreenctr, setLightgreenctr] = useState(0)
  const [skybluectr, setSkybluectr] = useState(0)
  const [bluectr, setBluectr] = useState(0)
  const [violetctr, setVioletctr] = useState(0)
  const [pinkctr, setPinkctr] = useState(0)

  const [color1, setColor1] = useState("red")
  const [color2, setColor2] = useState("orange")
  const [color3, setColor3] = useState("yellow")
  const [color4, setColor4] = useState("yellowgreen")
  const [color5, setColor5] = useState("lightgreen")
  const [color6, setColor6] = useState("skyblue")
  const [color7, setColor7] = useState("blue")
  const [color8, setColor8] = useState("violet")
  const [color9, setColor9] = useState("pink")

  const startRoll = () => {
    if (startRollbtn == "Start Roll") {
      setStartRollbtn("Stop Roll")
      setBool(true)
    } else {
      setStartRollbtn("Start Roll")
      setBool(false)
      if(color1 == "grey"){
        setRedctr(redctr+ 1)
        console.log(redctr)
      }else if(color2 == "grey"){
        setOrangectr(orangectr + 1)
      }
    }
  }

  const roulette1 = () => {
    numbers.sort(() => Math.random() - 0.5);
      setColor1(color1roll[numbers[0]])
    
  }
  const roulette2 = () => {
    numbers.sort(() => Math.random() - 0.5);
      setColor2(color2roll[numbers[0]])
    
  }
  
  
  useEffect(() => {
    if (bool == true) {
      const interval = setInterval(() => {
        numbers.sort(() => Math.random() - 1.1);
            roulette1()
          
        console.log(numbers[0])
        //console.log(numbers2[0])
        
      }, 500);
      return () => clearInterval(interval);
    }
  }, [bool != true]);

  return (
    <div className="App">
      <div>
        <div className="Container">
          <div className="paper">
            <div className='paper2'>
              <div className='clr' style={{ backgroundColor: "red" }}>{redctr}</div>
              <div className='clr' style={{ backgroundColor: "orange" }}>{orangectr}</div>
              <div className='clr' style={{ backgroundColor: "yellow" }}>{yellowctr}</div>
              <div className='clr' style={{ backgroundColor: "yellowgreen" }}>{yellowgreenctr}</div>
              <div className='clr' style={{ backgroundColor: "lightgreen" }}>{lightgreenctr}</div>
              <div className='clr' style={{ backgroundColor: "skyblue" }}>{skybluectr}</div>
              <div className='clr' style={{ backgroundColor: "blue" }}>{bluectr}</div>
              <div className='clr' style={{ backgroundColor: "violet" }}>{violetctr}</div>
              <div className='clr' style={{ backgroundColor: "pink" }}>{pinkctr}</div>
            </div>
          </div>
          <div className="containerrow">
            <div className="row">
              <div className='btngroup'>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: color1 }} value={1}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: color2 }} value={2}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "yellow" }} value={3}></Button>
              </div>
            </div>
            <div className='row'>
              <div>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "yellowgreen" }} value={4}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "lightgreen" }} value={5}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "skyblue" }} value={6}></Button>
              </div>
            </div>
            <div className='row'>
              <div>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "blue" }} value={7}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "violet" }} value={8}></Button>
                <Button variant="contained" size='large' sx={{ m: .1, bgcolor: "pink" }} value={9}></Button>
              </div>
            </div>
            <div className="check">
              <Button onClick={startRoll} variant="contained" color="primary" style={{ width: "100%", height: "30px" }}>{startRollbtn}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
