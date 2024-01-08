import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from '../admin/dashboard/create-blog/createblog.module.css';

interface FileUploadComponentProps {
  onFileChange: (file: File | null) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<any[]>([]);


  const checkFileSize = (file: File) => {
    const maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
    if (file.size > maxSizeInBytes) {
      message.error('File size must be less than 1 MB');
      return false;
    }
    return true;
  };
  const handleFileChange = ({ fileList }: { fileList: any[] }) => {
    setFileList(fileList);
};
  const beforeUpload = (file: File) => {
    if (checkFileSize(file)) {
      setFile(file);
      onFileChange(file);
    }
    return false;
  };

  const onRemove = () => {
    setFile(null);
    onFileChange(null);
  };

  return (
    <Upload
    name="image"
    listType="picture"
    fileList={fileList}
    beforeUpload={beforeUpload}
    onRemove={onRemove}
    onChange={handleFileChange}
    maxCount={1}
    >
      <Button className={styles.uploadbutton} icon={<UploadOutlined />}>Choose Files</Button>
    </Upload>
    
  );
};

export default FileUploadComponent;
