
import React, { useEffect, useRef, useState } from 'react';

export const useFechBrakingBadAPI = (url) =>{
    //...
    const [state, setState] = useState({ data: null, loading: true, error: null });
    let status = useRef(true);

    useEffect( () =>{
        console.log('Se monto un proceso');
        return () =>{
            console.log('Se desmonto el proceso');
        }
    },[status]);

    useEffect(() => {
        //...
        status.current = true;
        const getSentence = async () => {
            try{
                //...
                let resp = await fetch(url);
                let data = await resp.json();

                if(status.current){
                    setState({
                        data: data[0],
                        loading: false,
                        error: null
                    });
                }
            }catch(error){
                console.log('sucedio un error durante la peticion');

                setState({
                    ...state,
                    loading: false
                });
            }
        }
        getSentence();
    }, [url]);

    return state;
}