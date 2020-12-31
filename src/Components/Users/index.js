import React from 'react';
import styles from './Users.module.css';
import { Link } from 'react-router-dom'

function UserAccess() {
    return (
        <div className={styles.main_wrapper}>
            <h1 >Hello Kitty Café</h1>
            <p>Bienvenido, elige tú sección:</p>
            <div className={styles.container}>
                <Link to='/orders-kitchen'>Cocina</Link>
                <Link to='/orders-tables'>Mesas y Órdenes</Link>
                <Link to='/menu'>Menú</Link>
            </div>
        </div>
    )
}

export default UserAccess;

