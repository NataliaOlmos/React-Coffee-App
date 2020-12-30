import React from 'react';
import CardItem from '../MenuItem';
import styles from './Menu.module.css'

function MenuCoffee() {
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.card_deck}>
                <CardItem className={styles.card}
                    src='/images/image2.png'
                    text='Capuccino de vainilla'
                    label='Bebidas'
                    price='45.00'
                />
                <CardItem className={styles.card}
                    src='/images/image1.jpg'
                    text='Galletas de vainilla decoradas'
                    label='Postres'
                    price='60.00'
                />
                <CardItem className={styles.card}
                    src='/images/image7.jpg'
                    text='Helado sencillo (frutos rojos, vainilla, menta)'
                    label='Postres'
                    price='50.00'
                />
                <CardItem className={styles.card}
                    src='/images/image12.jpeg'
                    text='Hamburguesa con papas'
                    label='Plato'
                    price='90.00'
                />
                <CardItem className={styles.card}
                    src='/images/image9.jpg'
                    text='Bebidas heladas (fresa, zarzamora, manzana)'
                    label='Bebida'
                    price='90.00'
                />
                <CardItem className={styles.card}
                    src='/images/image3.jpg'
                    text='Paquete macarrones, sabores surtidos'
                    label='Postre'
                    price='120.00'
                />
                <CardItem className={styles.card}
                    src='/images/image6.jpg'
                    text='Tarta de fresas'
                    label='Postre'
                    price='55.00'
                />
                <CardItem className={styles.card}
                    src='/images/image18.jpg'
                    text='Malteada(fresa, menta, algodón de azucar)'
                    label='Bebida'
                    price='60.00'
                />
                <CardItem className={styles.card}
                    src='/images/image15.jpg'
                    text='Hot-dog con papas'
                    label='Plato'
                    price='100.00'
                />
                <CardItem className={styles.card}
                    src='/images/image16.jpeg'
                    text='Café regular'
                    label='Bebida'
                    price='50.00'
                />
                <CardItem className={styles.card}
                    src='/images/image17.jpeg'
                    text='Paquete Matcha (Pastel y Bebida)'
                    label='Postre'
                    price='120.00'
                />
                <CardItem className={styles.card}
                    src='/images/image14.jpg'
                    text='Paquete dulces y café'
                    label='Postre'
                    price='200.00'
                />
            </div>
        </div>
    )
}

export default MenuCoffee;