"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Modal, message } from 'antd';
import styles from '../../dashboard/blog/blog.module.css';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { SearchProps } from 'antd/es/input';
import { useRouter } from 'next/navigation';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import api from '@/app/axiosInterceptor/axiosInterceptor';

const { Search } = Input;
const { confirm } = Modal;

interface DataType {
  _id: any;
  image: string;
  title: string;
  description: string;
  CreatedAt: string;
  updatedAt: string,
}

const AdBlog: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [tokenAvailable, setTokenAvailable] = useState<boolean>(true);

  const showDeleteConfirm = (record: DataType) => {
    confirm({
      title: 'Are you sure you want to delete this blog?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(record);
        message.success('Blog Deleted');
      },
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'IMAGE',
      dataIndex: 'image',
      width: 50,
      render: (image: string) => <img src={image} alt="blog-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />,
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      width: 70,
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      width: 80,
    },
    {
      title: 'CREATED AT',
      dataIndex: 'CreatedAt',
      width: 50,
    },
    {
      title: 'UPDATED AT',
      dataIndex: 'updatedAt',
      width: 50,
    },
    {
      title: 'ACTIONS',
      dataIndex: 'actions',
      width: 30,
      render: (_, record) => (
        <>
          <Button style={{marginBottom:'15%'}}onClick={() => handleUpdate(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => showDeleteConfirm(record)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const UpdateData = async () => {
    try {
      const response = await api.get('/updateblog');
      const result = response.data;
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error('Error data:', error);
      setTokenAvailable(false);
    }
  };

  const handleUpdate = (record: DataType) => {
    router.push(`/admin/dashboard/${record._id}`);
  };

  const handleDelete = async (record: DataType) => {
    try {
      await api.delete(`/blogs/${record._id}`);
      const updatedData = data.filter((item) => item._id !== record._id);
      setData(updatedData);
      setFilteredData(updatedData);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const fetchData = async () => {
    try {
      router.push('./create-blog');
    } catch (error) {
      console.error('Error data:', error);
      setTokenAvailable(false);
    }
  }; 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setTokenAvailable(false);
    } else {
      UpdateData();
    }
  }, []);

  const onSearch: SearchProps['onSearch'] = (value) => {
    const filtered = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
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
        <h1 className={styles.heading}>BLOGS</h1>
        <Search
          placeholder="input search text"
          allowClear
          enterButton
          className={styles.searchbar}
          size="large"
          onSearch={onSearch}
        />
        <Table className={styles.Table} columns={columns} dataSource={filteredData} pagination={{ pageSize: 50 }} scroll={{ y: 280 }} />
        <Button onClick={fetchData} className={styles.button}>
          CREATE
        </Button>
      </div>
    </>
  );
};

export default AdBlog;
