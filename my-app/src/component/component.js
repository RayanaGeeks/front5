import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Component = () => {
    const dispatch= useDispatch()
    const {value}= useSelector((state)=> state)
    const plus =()=> {
        dispatch({
            type:"PLUS"
        })
    }
    const minus =()=>{
        dispatch({
            type:"MINUS"
        })
    }
    const plus10 =()=>{
        dispatch({
            type:"PLUS10"
        })
    }
    const minus10 =()=>{
        dispatch({
            type:"MINUS10"
        })
    }
    const reset =()=>{
        dispatch({
            type:"RESET"
        })
    }
    return (
        <div>
            <button onClick={reset}>reset</button>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={plus10}>+10</button>
            <button onClick={minus10}>-10</button>
            <p>{value}</p>
        </div>
    );
};

export default Component;