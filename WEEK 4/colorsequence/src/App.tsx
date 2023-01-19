import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Paper, styled } from '@mui/material';
import { color } from '@mui/system';

var count = 0;
let x = 0;

let colors: Array<string>;
colors = ['blue', 'orange', 'red', 'violet', 'yellow', 'green', 'brown', 'turquoise', 'cyan'];

var numbers: Array<number>
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

var numbers1: Array<number>
numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
numbers1.sort(() => Math.random() - 0.5);
console.log(numbers1);

/*function randomNum(min: number, max: number) { // min and max included 
  var newNum = Math.floor(Math.random() * (max - min + 1) + min);

  return newNum
}*/
/*let colorArr: Array<string>;
  colorArr = [];
  for (var i = 0; i < colors.length; i++) {
    var randomIndex = randomNum(1, 9);
    console.log(randomIndex);
    let randomColor = colors[randomIndex - 1];
    colorArr[i] = randomColor;
    //console.log(colorArr[i]);
    //console.log(i);
  }*/
function App() {
 // const min = 1;
  //const max = 9;

 /* function randomCol() {
    var random = randomNum(1, 9);

  }*/

  function reset() {
    setBgColor1('#42855B');
    setBgColor2('#42855B');
    setBgColor3('#42855B');
    setBgColor4('#42855B');
    setBgColor5('#42855B');
    setBgColor6('#42855B');
    setBgColor7('#42855B');
    setBgColor8('#42855B');
    setBgColor9('#42855B');
    
  }

function reset2(){
    reset();
    numbers.sort(() => Math.random() - 0.5);
    numbers1.sort(() => Math.random() - 0.5);
}
  //colors.splice(randomIndex, 1);

  //var index = randomNum(min, max);

  const [bgColor, setBgColor] = useState<any>('#42855B');
  const [bgColor1, setBgColor1] = useState<any>('#42855B');
  const [bgColor2, setBgColor2] = useState<any>('#42855B');
  const [bgColor3, setBgColor3] = useState<any>('#42855B');
  const [bgColor4, setBgColor4] = useState<any>('#42855B');
  const [bgColor5, setBgColor5] = useState<any>('#42855B');
  const [bgColor6, setBgColor6] = useState<any>('#42855B');
  const [bgColor7, setBgColor7] = useState<any>('#42855B');
  const [bgColor8, setBgColor8] = useState<any>('#42855B');
  const [bgColor9, setBgColor9] = useState<any>('#42855B');



  const clickHandler1 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[0]]) {
      setBgColor1(colors[numbers1[0]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  var clickHandler2 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[1]]) {
      setBgColor2(colors[numbers1[1]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  var clickHandler3 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[2]]) {
      setBgColor3(colors[numbers1[2]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
  }
  var clickHandler4 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[3]]) {
      setBgColor4(colors[numbers1[3]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  const clickHandler5 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[4]]) {
      setBgColor5(colors[numbers1[4]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  const clickHandler6 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[5]]) {
      setBgColor6(colors[numbers1[5]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  const clickHandler7 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[6]]) {
      setBgColor7(colors[numbers1[6]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  const clickHandler8 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[7]]) {
      setBgColor8(colors[numbers1[7]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  const clickHandler9 = (e: any) => {
    if (colors[numbers[x]] == colors[numbers1[8]]) {
      setBgColor9(colors[numbers1[8]]);
      count = count + 1;
      x = x + 1;
      if (count == 9) {
        alert("Good Job!");
        reset2();
      }
    } else {
      reset();
      count = 0;
      x = 0;
    }
    console.log(x);
  }
  return (
    <div className="App">
      <div>
        <div className="paper">
          <div className='paper2'>
            <div className='clr' style={{ backgroundColor: colors[numbers[0]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[1]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[2]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[3]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[4]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[5]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[6]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[7]] }}></div>
            <div className='clr' style={{ backgroundColor: colors[numbers[8]] }}></div>
          </div>
        </div>

        <div className="Container">
          <div className="row">
            <div className='btngroup'>
              <Button onClick={clickHandler1} variant="contained" sx={{ backgroundColor: bgColor1, m: 1 }} ></Button>
              <Button onClick={clickHandler2} variant="contained" sx={{ backgroundColor: bgColor2, m: 1 }} ></Button>
              <Button onClick={clickHandler3} variant="contained" sx={{ backgroundColor: bgColor3, m: 1 }} ></Button>
            </div>
          </div>
          <div className='row'>
            <div>
              <Button onClick={clickHandler4} variant="contained" sx={{ backgroundColor: bgColor4, m: 1 }} ></Button>
              <Button onClick={clickHandler5} variant="contained" sx={{ backgroundColor: bgColor5, m: 1 }} ></Button>
              <Button onClick={clickHandler6} variant="contained" sx={{ backgroundColor: bgColor6, m: 1 }} ></Button>
            </div>
          </div>
          <div className='row'>
            <div>
              <Button onClick={clickHandler7} variant="contained" sx={{ backgroundColor: bgColor7, m: 1 }} ></Button>
              <Button onClick={clickHandler8} variant="contained" sx={{ backgroundColor: bgColor8, m: 1 }} ></Button>
              <Button onClick={clickHandler9} variant="contained" sx={{ backgroundColor: bgColor9, m: 1 }} ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
