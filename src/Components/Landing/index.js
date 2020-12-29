import React from 'react';
import coffeeImage from '../../assets/images/hkcoffee.jpg'
import UserAccess from '../Users';
import styles from './LandingPage.module.css'

function SplitScreen() {
    return (
        <div className={styles.sign}>
            <div style={{ backgroundImage: `url(${coffeeImage})` }} className={styles.sign__left} />
            <div className={styles.sign__right}>
                <div className={styles.sign__content}>
                    <UserAccess />
                </div>
            </div>
        </div>
    )
}

export default SplitScreen;

