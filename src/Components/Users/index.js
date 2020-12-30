import React from 'react';
import styles from './Users.module.css'
import { Button } from 'antd';


function UserAccess() {
    return (
        <div className={styles.main_wrapper}>
            <h1 >Hello Kitty Coffee</h1>
            <p>Bienvenido, elige tú sección:</p>
            <div className={styles.container}>
                <Button>Cocina</Button>
                <Button>Mesas y Órdenes</Button>
                <Button>Menú</Button>
            </div>
        </div>
    )
}

export default UserAccess;

