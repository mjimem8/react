import { useState } from 'react'

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState);

    const reset = () => {
        setstate(initialState);
    }

    const increment = () => {
        setstate(state + 1);
    }

    const decrement = () => {
        setstate(state - 1);
    }

    return { 
        counter: state,
        increment,
        decrement,
        reset
     };
}
