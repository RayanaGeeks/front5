import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import classes from "./Card.module.css";

function Card({ cardInfo }) {
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)

    const mouseWith = () => {
        setIsHovered(true)
    };

    const mouseWithout = () => {
        setIsHovered(false)
    };

    return (
        <div className={classes.card} onClick={mouseWith} onDoubleClick={mouseWithout}>
            <img className={classes.cardImg} src="https://pt-ambulanz.at/wp-content/uploads/2018/04/Einzelpsychotherapie-icon.png" alt="user" />
            <h2 className={classes.cardTitle}>{cardInfo.name}</h2>
            <h3>{cardInfo.username}</h3>
            {isHovered && (
                <div className={classes.cardDescription}>
                    <p><b>Website:</b> {cardInfo.website}</p>
                    <p><b>Email:</b> {cardInfo.email}</p>
                    <p><b>Phone:</b> {cardInfo.phone}</p>
                </div>
            )}
        </div>
    )
}

export default Card;

