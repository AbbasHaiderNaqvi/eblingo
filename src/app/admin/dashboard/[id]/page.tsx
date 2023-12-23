"use client"
import { useState, useEffect } from 'react';
import { Button, Col, Input, Row, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from '../create-blog/createblog.module.css';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../../Sidebar/Sidebar';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const { TextArea } = Input;

const UpdateBlog: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [tokenAvailable, setTokenAvailable] = useState<boolean>(true); 
    const [fileList, setFileList] = useState<any[]>([]);
    const id = params.id;

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/blogs/${id}`);
                const blogData = response.data;

                setBlog(blogData);
                setTitle(blogData.title);
                setContent(blogData.content);
                setDescription(blogData.description);
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', content);

            if (fileList.length > 0) {
                formData.append('image', fileList[0].originFileObj as Blob);
            }

            const response = await axios.put(`http://localhost:3001/updateblog/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Form data Updated successfully:', response.data);
            router.push('./blog');
            message.success('Blog Updated');
        } catch (error) {
            console.error('Error updating blog:', error);

        }
    };

    
    const handleFileChange = ({ fileList }: { fileList: any[] }) => {
        setFileList(fileList);
    };
    if (!blog) {
        return null; // or you can show a loading indicator
    }
    if (!tokenAvailable) {
        router.push('/admin/login');
        return null;
    }
    return (
        <div>
            <Sidebar />
            <div className={styles.Edit_Blog}>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>Title:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <Input
                            className={styles.EditBlog_Input1}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>MAIN IMAGE:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <Upload
                            name="image"
                            listType="picture"
                            fileList={fileList}
                            beforeUpload={() => false}
                            onChange={handleFileChange}
                            maxCount={1}
                        >
                            <Button className={styles.uploadbutton} icon={<UploadOutlined />}>
                                CHOOSE YOUR FILES
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>DESCRIPTION:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <TextArea
                            className={styles.TextArea}
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Row>
                <div className={styles.ContentContainer}>
                <label className={styles.EditBlog_L3}>CONTENT:</label>
                <ReactQuill
                    className={styles.editor}
                    value={content}
                    onChange={(value) => setContent(value)}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            [{ 'color': [] }, { 'background': [] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link', 'image'],
                            ['clean'],
                        ],
                    }}
                    formats={['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image']}
                />
                </div>
                <Button className={styles.UpdateButton} onClick={handleUpdate}>
                    UPDATE
                </Button>
            </div>
        </div>
    );
};

export default UpdateBlog;
