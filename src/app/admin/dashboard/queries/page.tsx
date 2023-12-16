"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table } from 'antd';
import styles from '../queries/queries.module.css';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { SearchProps } from 'antd/es/input';
import { useRouter } from 'next/navigation'
import { ReloadOutlined, SyncOutlined } from '@ant-design/icons';


const { Search } = Input;


interface DataType {
    name: string;
    phone: string;
    email: string;
    sourceLanguage: string;
    targetLanguage: string;
    projectSize: string;
    uploadDocument: string[]; 
    message: string;
    submissionDateTime: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'NAME',
        dataIndex: 'name',
        width: 30,
    },
    {
        title: 'PHONE',
        dataIndex: 'phone',
        width: 30,
    },
    {
        title: 'SOURCE',
        dataIndex: 'sourceLanguage',
        width: 30, 
    },
    {
        title: 'TARGET',
        dataIndex: 'targetLanguage',
        width: 30, 
    },
    {
        title: 'COST ($)',
        dataIndex: 'projectSize',
        width: 30,
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        width: 50,
    },
    {
        title: 'MESSAGE',
        dataIndex: 'message',
        width: 50,
    },
    {
        title: 'CREATED AT',
        dataIndex: 'submissionDateTime',
        width: 50,
    }
];



const ContactTable: React.FC = () => {
    const router= useRouter();
    const [data, setData] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [tokenAvailable, setTokenAvailable] = useState<boolean>(true); 


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/admin/dashboard/contact-table');
            const result = response.data;
            setData(result);
            setFilteredData(result); 
        } catch (error) {
            console.error('Error fetching data:', error);
            setTokenAvailable(false);
        }
    };
    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (!token) {
            setTokenAvailable(false);
        } else {
            fetchData();
        }
    }, []); 


    const onSearch: SearchProps['onSearch'] = (value) => {
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };
    if (!tokenAvailable) {
        router.push('/login');
        return null;
    }
    return (
        <>
        <Sidebar/>
        <div>
            <h1 className={styles.heading}>CONTACT US!</h1>
            <Search
                    placeholder="input search text"
                    allowClear
                    enterButton
                    className={styles.searchbar}
                    size="large"
                    onSearch={onSearch}
                />
                    <Table className={styles.Table} columns={columns} dataSource={filteredData}  pagination={{ pageSize: 50 }} scroll={{ y: 280 }} />
                    <Button onClick={fetchData} className={styles.button}><ReloadOutlined style={{fontSize:'150%'}}/></Button>
        </div>
        </>
    );
};

export default ContactTable;
