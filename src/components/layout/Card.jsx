import React from 'react';
import './Card.css'

function Card(props) {
    return (
    <div className="Card" style={{
        backgroundColor: props.color || '#000'}}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: '#000'
        }}>
            {props.titulo}
        </div>
    </div>
)    
} 

export default Card;