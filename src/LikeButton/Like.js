import React, { useState } from 'react';
import './Like.css'

function Like() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return(
        <div className="Like">
            <button onClick={handleDecrement}>-</button>
            <h3> Count: {count}</h3>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Like