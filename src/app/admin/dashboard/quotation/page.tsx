"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Spin } from 'antd';
import styles from '../queries/queries.module.css';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../../Sidebar/Sidebar';
import { SearchProps } from 'antd/es/input';
import { ReloadOutlined } from '@ant-design/icons';
import Link from 'next/link';
import api from '@/app/axiosInterceptor/axiosInterceptor';
import { useRouter } from 'next/navigation';

const { Search } = Input;

interface DataType {
    name: string;
    email: string;
    sourceLanguage: string[];
    targetLanguage: string[];
    services: string[];
    uploadlink: string;
    submissionDateTime:string;
}


const columns: ColumnsType<DataType> = [
    {
        title: 'NAME',
        dataIndex: 'name',
        width: 30,
    },
    {
        title: 'SERVICES',
        dataIndex: 'services',
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
        title: 'EMAIL',
        dataIndex: 'email',
        width: 40,
    },
    {
        title: 'UPLOAD LINK',
        dataIndex: 'uploadlink',
        width: 35,
        render: (value: any) => { 
            return value ? <Link href={value}>{value}</Link> : null; 
        },
    },
    {
        title: 'CREATED AT',
        dataIndex: 'submissionDateTime',
        width: 40,
    }
];


const ContactTable: React.FC = () => {
    const router = useRouter();
    const [data, setData] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [tokenAvailable, setTokenAvailable] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true); // Set loading to true when starting API call
        try {
            const response = await api.get('/admin/dashboard/getquote');
            const result = response.data;
            setData(result);
            setFilteredData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false when API call completes (including errors)
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
        router.push('/admin/login');
        return null;
    }

    return (
        <>
            <Sidebar />
            <div>
                <h1 className={styles.heading}>QUOTATION</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton
                    className={styles.searchbar} 
                    size="large"
                    onSearch={onSearch}
                />
                
                    <>
                        <Table
                            className={styles.Table}
                            columns={columns}
                            dataSource={filteredData}
                            scroll={{ y: 300 }}
                            loading={loading}
                        />
                        <Button onClick={fetchData} className={styles.button}>
                            <ReloadOutlined style={{ fontSize: '150%' }} />
                        </Button>
                    </>
            </div>
        </>
    );
};

export default ContactTable;