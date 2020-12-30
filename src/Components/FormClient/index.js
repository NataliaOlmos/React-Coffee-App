import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './FormClient.module.css'


function FormClient() {
    return (
        <div className={styles.text}>
            <Input size="large" placeholder="Nombre del cliente" prefix={<UserOutlined />} />

        </div>
    )
}

export default FormClient;