import React from 'react';
import { Card, Button, Input, Menu } from 'antd';
import styles from './MenuItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import MenuCoffee from '../Menu';

function CardItem(props) {
    return (
        <div className="site-card-wrapper">
            <Card className={styles.main_wrapper} data-category={props.label} >
                <img className={styles.card} src={props.src} alt="Menu" />
                <h5 className={styles.text}>{props.text}</h5>
                <p className={styles.text}>${props.price}MXN</p>
            </Card>
            <Button className={styles.minus}>
                -
            </Button>
            <Input placeholder="Cantidad" type="number" />
            <Button className={styles.plus}>
                +
            </Button>
            <span onClick={() => { }}>
                <FontAwesomeIcon className={styles.icon}
                    icon={faTrash}
                />
            </span>

        </div>
    )
}

export default CardItem