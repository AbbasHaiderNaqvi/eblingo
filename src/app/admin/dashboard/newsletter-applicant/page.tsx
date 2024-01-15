"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Spin } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import styles from '../queries/queries.module.css';
import api from '@/app/axiosInterceptor/axiosInterceptor';
import { SearchProps } from 'antd/es/input';
import { useRouter } from 'next/navigation';
import Sidebar from '../../Sidebar/Sidebar';

const { Search } = Input;

interface DataType {
    email: string;
    submissionDateTime: string;
}

const columns = [
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
    const router = useRouter();
    const [data, setData] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [tokenAvailable, setTokenAvailable] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get('/admin/dashboard/connect-email');
            const result = response.data;
            setData(result);
            setFilteredData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
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
            item.email.toLowerCase().includes(value.toLowerCase())
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
                <h1 className={styles.heading}> NEWSLETTER APPLICANTS</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton
                    className={styles.searchbar}
                    size="large"
                    onSearch={onSearch}
                />
                {loading ? (
                    <Spin size="large" />
                ) : (
                    <>
                        <Table
                            className={styles.Table}
                            columns={columns}
                            dataSource={filteredData}
                            pagination={{ pageSize: 10 }}
                            scroll={{ y: 300 }}
                        />
                        <Button onClick={fetchData} className={styles.button}>
                            <ReloadOutlined style={{ fontSize: '150%' }} />
                        </Button>
                    </>
                )}
            </div>
        </>
    );
};

export default ContactTable;
