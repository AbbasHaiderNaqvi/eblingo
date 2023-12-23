'use client';
import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Modal, message, Select } from 'antd';
import styles from '../../dashboard/languages/languages.module.css';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import api from '@/app/axiosInterceptor/axiosInterceptor';

const { confirm } = Modal;
const { Option } = Select;

interface DataType {
  _id: any;
  CreatedAt: string;
}

const LanguagePage: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType[]>([]);
  const [tokenAvailable, setTokenAvailable] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newEntry, setNewEntry] = useState<{ label: string; value: string; type: string }>({
    label: '',
    value: '',
    type: 'source', // Default type
  });

  const showDeleteConfirm = (record: DataType) => {
    confirm({
      title: 'Are you sure you want to delete this language?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(record);
        message.success('Language Deleted');
      },
    });
  };

  const showCreateModal = () => {
    setModalVisible(true);
  };

  const handleCreate = async () => {
    try {
      // Validate inputs
      if (!newEntry.label || !newEntry.value) {
        message.error('Label and Value are required');
        return;
      }

      // Send data to backend based on the selected type
      const response = await api.post('/languages', newEntry);
      const createdEntry = response.data;
      setData([...data, createdEntry]);

      // Close modal and reset form
      setModalVisible(false);
      setNewEntry({ label: '', value: '', type: 'source' });
      message.success('Language Created');
    } catch (error) {
      console.error('Error creating language:', error);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleInputChange = (key: string, value: string) => {
    setNewEntry((prev) => ({ ...prev, [key]: value }));
  };

  const handleDelete = async (record: DataType) => {
    try {
      await api.delete(`/languages/${record._id}`);
      const updatedData = data.filter((item) => item._id !== record._id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting language:', error);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'LABEL',
      dataIndex: 'label',
      width: 50,
    },
    {
      title: 'KEY',
      dataIndex: 'value',
      width: 70,
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      width: 80,
    },
    {
      title: 'CREATED AT',
      dataIndex: 'CreatedAt',
      width: 50,
    },
    {
      title: 'ACTIONS',
      dataIndex: 'actions',
      width: 30,
      render: (_, record) => (
        <>
          <Button style={{ marginBottom: '15%' }} onClick={() => showDeleteConfirm(record)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const updateData = async () => {
    try {
      const response = await api.get('/getlanguages');
      const result = response.data;
      setData(result);
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
      updateData();
    }
  }, []);
  if (!tokenAvailable) {
    router.push('/admin/login');
    return null;
}

  return (
    <>
      <Sidebar />
      <div>
        <h1 className={styles.heading}>LANGUAGES</h1>
        <Table
          className={styles.Table}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 280 }}
        />
        <Button onClick={showCreateModal} className={styles.button}>
          CREATE
        </Button>
      </div>
      <Modal
        title="Create Language Entry"
        open={modalVisible}
        onOk={handleCreate}
        onCancel={handleCancel}
      >
        <div>
          <label>Label:</label>
          <Input
            value={newEntry.label}
            onChange={(e) => handleInputChange('label', e.target.value)}
          />
        </div>
        <div>
          <label>Key:</label>
          <Input
            value={newEntry.value}
            onChange={(e) => handleInputChange('value', e.target.value)}
          />
        </div>
        <div>
          <label>Type:</label>
          <Select
          className={styles.select}
            value={newEntry.type}
            onChange={(value) => handleInputChange('type', value)}
          >
            <Option value="source">Source</Option>
            <Option value="target">Target</Option>
          </Select>
        </div>
      </Modal>
    </>
  );
};

export default LanguagePage;
