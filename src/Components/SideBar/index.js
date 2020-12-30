import React from 'react'
import { Menu } from 'antd';
import styles from './SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoneyBill, faSpinner } from '@fortawesome/free-solid-svg-icons'

function SideBar() {


    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__logo}>
                Hello Kitty Coffee
            </div>
            <Menu
                className={styles.sidemenu}
                mode="inline"
            >
                <Menu.Item
                    key="orden"
                    icon={
                        <FontAwesomeIcon
                            icon={faCoffee}
                            className={styles.sidemenu__icon}
                        />
                    }
                >
                    Órdenes
                </Menu.Item>
                <Menu.Item
                    key="states"
                    icon={
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={styles.sidemenu__icon}
                        />
                    }
                >
                    Estatus
                    </Menu.Item>
                <Menu.Item
                    key="bill"
                    icon={
                        <FontAwesomeIcon
                            icon={faMoneyBill}
                            className={styles.sidemenu__icon}
                        />
                    }
                >
                    Monto final
                    </Menu.Item>
            </Menu>
        </div>
    );


}

export default SideBar;