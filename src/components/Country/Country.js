import React from 'react';
import './Country.css'
const Country = props => {
    const {name, flag, capital, population} = props.country 
    const clickHandler = () => {
        alert("Thank you for your Click, We are Unavailable to Show You more details about " + name )
    }
    return (
        <div className='country'>
            <img src={flag}></img>
            <h2>Name: {name.slice(0, 20)}</h2>
            <p>Capital: {capital} <small>and Population: {population}</small></p>
            <button onClick={clickHandler}>Details About {name}</button>
        </div>
    );
};

export default Country;