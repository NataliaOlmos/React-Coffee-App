import React from 'react';
import styles from './OrdersKitchen.module.css'
import SideBar from '../SideBar';
import TablePage from '../TableKitchen';


function OrdersKitchen() {
    return (
        <div>
            <SideBar />
            <h1 className={styles.title}>Cocina</h1>
            <p className={styles.title}>Revisa el historial de órdenes y su estatus</p>
            <TablePage />

        </div>
    )
}

export default OrdersKitchen;