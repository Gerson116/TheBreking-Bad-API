
import React from 'react';
import ReactDOM from 'react-dom';
import { useCount } from '../hooks/useCount';
import { useFechBrakingBadAPI } from '../hooks/useFechBrakingBadAPI';

export const BrakingBadApp = ()=>{
    //...

    const {state, increment, decrement} = useCount(1);
    const url = `https://breakingbadapi.com/api/quotes/${state}`;

    const getSentence = useFechBrakingBadAPI(url);
    const resp = !!getSentence.data && getSentence.data; //
    console.log(getSentence.loading);

    return  <>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <h3>The Breking Bad API</h3>
                        <hr />
                    </div>
                </div>
                {
                    (getSentence.loading == true)
                    ?
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <div className="alert alert-primary">
                                <span className="text-center">cargando...</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row">
                    </div>
                }
                <div className="container">
                    <div className="row animate__animated animate__backInRight">
                        <div className="col-md-12 mt-3">
                            <h3> Serie: { resp.series } </h3>
                            <p>
                                { resp.quote }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <blockquote className="blockquote text-right">
                            <footer className="blockquote-footer"><cite title="Source Title">{ resp.author }</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <button className="btn btn-primary" onClick={ decrement }>Atras </button>
                        <button className="btn btn-primary ml-3" onClick={ increment }>Siguiente </button>
                    </div>
                </div>
            </>
}