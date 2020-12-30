import React from 'react';
import styles from './OrdersTable.module.css'
import SideBar from '../SideBar';
import FormClient from '../FormClient';
import MenuCoffee from '../Menu';


function OrdersTable() {
    return (
        <div>
            <SideBar />
            <h1 className={styles.title}>Servicio en mesas</h1>
            <p className={styles.title}>Almacena las órdenes tomadas, revisa su estatus y el monto total de la orden</p>
            <FormClient />
            <MenuCoffee />
        </div>
    )
}

export default OrdersTable;