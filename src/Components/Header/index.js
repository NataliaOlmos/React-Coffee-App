import React from 'react';
import styles from './Header.module.css'
import { PageHeader } from 'antd';


function Header() {
    return (
        <PageHeader
            className={styles.header}
            title="Hello Kitty Café"
        />
    )
}

export default Header;