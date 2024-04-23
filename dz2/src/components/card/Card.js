import React, {useState} from 'react';
import classes from "./Card.module.css";
function Card({cardInfo}) {
    const [isHovered, setIsHovered] = useState(false)

    const mouseWith = () => {
        setIsHovered(true)
    }

    const mouseWithout = () => {
        setIsHovered(false)
    }
    return (
        <div className={classes.card} onClick={mouseWith} onDoubleClick={mouseWithout}>
            <img className={classes.cardImg} src="https://freesvg.org/img/abstract-user-flat-3.png" alt="user" />
            <h2 className={classes.cardTitle}>{cardInfo.name}</h2>
            {isHovered && (
                <div className={classes.cardDescription}>
                    <p><b>Website:</b> {cardInfo.website}</p>
                    <p><b>Email:</b> {cardInfo.email}</p>
                    <p><b>Phone:</b> {cardInfo.phone}</p>
                </div>
            )}
        </div>
    );
}
export default Card;