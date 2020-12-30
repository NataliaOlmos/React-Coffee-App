import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import styles from './TableKitchen.module.css';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        Nombre: 'John',
        Mesa: '1',
        Orden: 'Galletas de vainilla',
        Estatus: ['Terminado'],
    },
    {
        key: '2',
        Nombre: 'Jack',
        Mesa: '6',
        Orden: 'Café Regular... ',
        Estatus: ['Preparando'],
    },
    {
        key: '3',
        Nombre: 'Joe',
        Mesa: '17',
        Orden: 'Hamburguesa... ',
        Estatus: ['Orden tomada'],
    },
];

function TablePage() {
    return (
        <Table dataSource={data} className={styles.text}>
            <ColumnGroup title="Órdenes">
                <Column title="Nombre cliente" dataIndex="Nombre" key="Nombre" />

            </ColumnGroup>
            <Column title="Orden" dataIndex="Orden" key="Orden" />
            <Column title="Mesa" dataIndex="Mesa" key="Mesa" />
            <Column
                title="Estatus"
                dataIndex="Estatus"
                key="Estatus"
                render={Estatus => (
                    <>
                        {Estatus.map(tag => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <Button>Delete</Button>
                    </Space>
                )}
            />
        </Table>
    )
}
export default TablePage