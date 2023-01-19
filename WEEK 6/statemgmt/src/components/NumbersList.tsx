import Button from "@mui/material/Button"
import { useContext, useEffect, useState } from "react"
import NumbersContext, { NumbersListContext } from "../context/helpers/NumbersContext"
import Numbers, { NumbersDetails } from "./Numbers"

var indexes: Array<number>
indexes = [0, 1];

export default function NumbersList() {
    const numbers = useContext(NumbersListContext)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let inter1 =
            setInterval(() => {
                del2()
            }, 1500)
        let inter2 =
            setInterval(() => {
                del3()
            }, 2500)
        let inter3 =
            setInterval(() => {
                del4()
            }, 3000)
        let inter4 =
            setInterval(() => {
                del5()
            }, 4000)

        return () => { clearInterval(inter1), clearInterval(inter2), clearInterval(inter3)
        clearInterval(inter4) }

    }, [])

    const add = () => {
        indexes.sort(() => Math.random() - .2);
        const colArray = ["black", "red"]
        setIndex(indexes[0])
        let random = Math.floor(Math.random() * 190)
        numbers?.addNumber({ num_value: random, color: colArray[indexes[0]] })
        console.log(indexes[0])

    }

    const pass = () => {
        numbers?.passNumber()

    }

    const del2 = () => {
        numbers?.deleteNumber2()
    }
    const del3 = () => {
        numbers?.deleteNumber3()
    }
    const del4 = () => {
        numbers?.deleteNumber4()
    }
    const del5 = () => {
        numbers?.deleteNumber5()
    }
    return (
        <div className='Container'>
            <div className='Container1'>
                <div className='ContainerTask'>
                    <div className='randombtn'><Button onClick={add} variant='contained'>Add Random Task</Button></div>
                    <div className='Title'><b>Task Queue</b></div>
                    <div className='numcontainer'>
                        {numbers?.Numbers.map((item, i) =>
                            <Numbers key={i} num_value={item.num_value} color={item.color} />
                        )}
                    </div>
                    <div className='admitbtn'><Button onClick={pass} variant='contained'>Admit Task</Button></div>
                </div>
            </div>
            <div className='Container2'>
                <div className='subContainerPrio'>
                    <div className='TaskTitle'><b>High Priority Queue</b></div>
                    <div className='QueuelistTitle'><p>Queue List:</p></div>
                    <div className='ContainerTask'>
                        {numbers?.Numbers2.map((item, i) =>
                            <Numbers key={i} num_value={item.num_value} color={item.color} />
                        )}
                    </div>
                    <div className='DurationTitle'><p>Duration:</p></div>
                </div>
                <div className='subContainer'>
                    <div className='TaskTitle'><b>Regular Queue</b></div>
                    <div className='QueuelistTitle'><p>Queue List:</p></div>
                    <div className='ContainerTask'>
                        {numbers?.Numbers3.map((item, i) =>
                            <Numbers key={i} num_value={item.num_value} color={item.color} />
                        )}
                    </div>
                    <div className='DurationTitle'><p>Duration:</p></div>
                </div>
                <div className='subContainer'>
                    <div className='TaskTitle'><b>Regular Queue</b></div>
                    <div className='QueuelistTitle'><p>Queue List:</p></div>
                    <div className='ContainerTask'>
                        {numbers?.Numbers4.map((item, i) =>
                            <Numbers key={i} num_value={item.num_value} color={item.color} />
                        )}
                    </div>
                    <div className='DurationTitle'><p>Duration:</p></div>
                </div>
                <div className='subContainer'>
                    <div className='TaskTitle'><b>Regular Queue</b></div>
                    <div className='QueuelistTitle'><p>Queue List:</p></div>
                    <div className='ContainerTask'>
                        {numbers?.Numbers5.map((item, i) =>
                            <Numbers key={i} num_value={item.num_value} color={item.color} />
                        )}
                    </div>
                    <div className='DurationTitle'><p>Duration:</p></div>
                </div>
            </div>
        </div>

    )

}