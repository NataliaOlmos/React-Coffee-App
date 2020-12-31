import React from 'react';

import styles from './CommonCard.module.css';

function Card({
    children, className, ...rest
}) {
    return (
        <div className={`${styles.card} ${className}`} {...rest}>
            { children}
        </div>
    );
}

export default Card;
