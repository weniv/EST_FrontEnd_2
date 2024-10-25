import React from 'react';
import './MenuListItem.css';

export default function MenuListItem({ mood, setMood, isSelected }) {

    const onItemClick = () => {

        setMood(mood);
    };


    return (
        <li className={isSelected ? 'selected' : null} ><button onClick={onItemClick}>기분이: {mood}</button></li>
    )
}
