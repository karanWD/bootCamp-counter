import React, {useState} from "react"
import "./Counter.css"
const Counter = () => {
    const [count, setCount] = useState(0)
    const [limit,setLimit] = useState(10)
    const increament = () => {
        if (count < limit) {
            setCount(count + 1)
        }
    }
    const decreamnet = () => {
        if(count > 0){
        setCount(count - 1)
        }
    }
    const colorHandler = () => {
        if (count > 5) return "green"
        if (count < 5) return "red"
    }
    const changeHandler = (value) =>{
            setLimit(value)
    }
    return (
        <>
            <div>
                <label htmlFor="">limit</label>
                <input type="number" onChange={(event)=>changeHandler(event.target.value)}/>
            </div>
            <div className={"counter"}>
                <button onClick={increament}>+</button>
                <div style={{color: colorHandler()}} className={"count"}>{count}</div>
                <button onClick={decreamnet}>-</button>
            </div>
        </>
    )
}

export default Counter