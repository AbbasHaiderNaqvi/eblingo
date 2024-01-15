'use client';
import React, { useEffect, useState } from 'react';
import styles from '../../dashboard/languages/languages.module.css';
import { Input, Button, Table, Modal, message, Select, Spin } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import api from '@/app/axiosInterceptor/axiosInterceptor';
import { useRouter } from 'next/navigation';
import Sidebar from '../../Sidebar/Sidebar';

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
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true); // Set loading to true when starting API call

      // Validate inputs
      if (!newEntry.label || !newEntry.value) {
        message.error('Label and Value are required');
        setLoading(false); // Set loading to false when validation fails
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
    } finally {
      setLoading(false); // Set loading to false when API call completes
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
      setLoading(true); // Set loading to true when starting API call

      await api.delete(`/languages/${record._id}`);
      const updatedData = data.filter((item) => item._id !== record._id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting language:', error);
    } finally {
      setLoading(false); // Set loading to false when API call completes
    }
  };

  const columns = [
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
      render: (_: any, record: DataType) => (
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
      setLoading(true); // Set loading to true when starting API call

      const response = await api.get('/getlanguages');
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error('Error data:', error);
      setTokenAvailable(false);
    } finally {
      setLoading(false); // Set loading to false when API call completes
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
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
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
          </>
        )}
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
