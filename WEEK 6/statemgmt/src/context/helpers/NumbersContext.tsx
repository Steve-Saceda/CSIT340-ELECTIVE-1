import React, { createContext, useState } from "react";
import { NumbersDetails } from "../../components/Numbers";
var x = 0

interface NumbersListContextDoer {
  Numbers: NumbersDetails[],
  Numbers2: NumbersDetails[],
  Numbers3: NumbersDetails[],
  Numbers4: NumbersDetails[],
  Numbers5: NumbersDetails[],
  addNumber: (num: NumbersDetails) => void,
  passNumber: () => void
  deleteNumber2: () => void
  deleteNumber3: () => void
  deleteNumber4: () => void
  deleteNumber5: () => void
  getNumber2: () => void
}

export const NumbersListContext = createContext<NumbersListContextDoer | null>(null);

export default function NumbersListProvider(props: { children: React.ReactNode }) {
  const [Numbers, setNumbers] = useState<NumbersDetails[]>([]);
  const [Numbers2, setNumbers2] = useState<NumbersDetails[]>([]);
  const [Numbers3, setNumbers3] = useState<NumbersDetails[]>([]);
  const [Numbers4, setNumbers4] = useState<NumbersDetails[]>([]);
  const [Numbers5, setNumbers5] = useState<NumbersDetails[]>([]);

  const addNumber = (num: NumbersDetails) => {
    setNumbers([...Numbers, num]);
  }

  const passNumber = () => {
    if (Numbers[0].color == "red") {
      setNumbers2([...Numbers2, Numbers[0]])
    } else if (Numbers[0].color == "black") {

      if (x == 0) {
        setNumbers3([...Numbers3, Numbers[0]])
        x++;
      } else if (x == 1) {
        setNumbers4([...Numbers4, Numbers[0]])
        x++;
      } else if (x == 2) {
        setNumbers5([...Numbers5, Numbers[0]])
        x = 0
      }

    }

    setNumbers((NumberDetails) => NumberDetails.filter((_, index) => index !== 0))
  }

  const deleteNumber2 = () => {
    setNumbers2((NumberDetails) => NumberDetails.filter((_, index) => index !== 0))
  }
  const deleteNumber3 = () => {
    setNumbers3((NumberDetails) => NumberDetails.filter((_, index) => index !== 0))
  }
  const deleteNumber4 = () => {
    setNumbers4((NumberDetails) => NumberDetails.filter((_, index) => index !== 0))
  }
  const deleteNumber5 = () => {
    setNumbers5((NumberDetails) => NumberDetails.filter((_, index) => index !== 0))
  }

  const getNumber2 = () =>{
    return Numbers2[0].num_value + "1000";
  }

  return (
    <NumbersListContext.Provider value={{ Numbers, Numbers2, Numbers3, Numbers4, Numbers5, addNumber, passNumber, deleteNumber2, deleteNumber3, deleteNumber4, deleteNumber5, getNumber2 }}>
      {props.children}
    </NumbersListContext.Provider>
  )
}