
import React, { useEffect, useState } from 'react';

export const useCount = (num) => {
    //...
    const [state, setState] = useState(num);

    useEffect(() =>{
        
    }, [state]);

    const increment = () => {
        setState( i => i + 1 );
    }

    const decrement = () => {
        setState( d => d - 1 );
    }

    return {state, increment, decrement};
}