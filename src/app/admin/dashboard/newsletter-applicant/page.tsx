"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table } from 'antd';
import styles from '../queries/queries.module.css';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { SearchProps } from 'antd/es/input';
import { ReloadOutlined, SyncOutlined } from '@ant-design/icons';

const { Search } = Input;


interface DataType {
    email: string;
    submissionDateTime: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'EMAIL',
        dataIndex: 'email',
        width: 50,
    },
    {
        title: 'CREATED AT',
        dataIndex: 'submissionDateTime',
        width: 50,
    }

];
const ContactTable: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/admin/dashboard/connect-email');
            const result = response.data;
            setData(result);
            setFilteredData(result); 
        } catch (error) {
            console.error('Error data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const onSearch: SearchProps['onSearch'] = (value) => {
        const filtered = data.filter((item) =>
            item.email.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <>
            <Sidebar />
            <div>
                <h1 className={styles.heading}> NEWSLETTER APPLICANTS</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton
                    className={styles.searchbar}
                    size="large"
                    onSearch={onSearch}
                />
                <Table className={styles.Table} columns={columns}  dataSource={filteredData} pagination={{ pageSize: 10 }} scroll={{ y: 300 }} />
                <Button onClick={fetchData} className={styles.button}><ReloadOutlined style={{fontSize:'150%'}}/></Button>
            </div>
        </>
    );
};

export default ContactTable;
