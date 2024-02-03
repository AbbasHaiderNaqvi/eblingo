"use client";
import { FC, useState, useEffect } from 'react';
import { Button, Col, Row, Input, Form, Upload, Select, message, Spin } from 'antd';
import styles from '../styles/Contact.module.css';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useRouter } from 'next/navigation';
import api from '../axiosInterceptor/axiosInterceptor';

interface Language {
  value: string;
  label: string;
  type: string;
}

const Contact: FC = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const [sourceLanguages, setSourceLanguages] = useState<Language[]>([]);
  const [targetLanguages, setTargetLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const response = api.get('/getlanguages').then((response) => {
          setLoading(false)
          const languages: Language[] = response.data;
  
        const sourceLangs = languages.filter(lang => lang.type === 'source');
        const targetLangs = languages.filter(lang => lang.type === 'target');
  
        
        sourceLangs.sort((a, b) => a.label.localeCompare(b.label));
        targetLangs.sort((a, b) => a.label.localeCompare(b.label));
  
        setSourceLanguages(sourceLangs);
        setTargetLanguages(targetLangs);
      });
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };
  
    fetchData();
  }, []);

  const onFinish = async (values: any) => {
    try {
      console.log(values);
      const response = await api.post('/contact', values);
      console.log('Form data submitted successfully:', response.data);
      message.success('Thank you! We will contact you soon');
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <Spin spinning={Loading} >
    <div>
      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Contact Us</h1>
      </div>
      <div className={styles.contact_heading_main}>
        Contact Us
      </div>
      <div className={styles.contact_container}>
        <Form
          method='POST'
          name="contactForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Name"
                name="name"
                className={styles.Row1}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your correct name',
                    pattern: /^[A-Za-z ]+$/,
                  },
                ]}>
                <Input placeholder="Your Name" autoComplete='off' className={styles.Input1} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Phone"
                name="phone"
                className={styles.PhoneRow}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your correct phone number',
                    pattern: /^[0-9]+$/,
                  },
                ]}
              >
                <Input placeholder="Your Phone Number" autoComplete='off' className={styles.Input2} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Source Language"
                name="sourceLanguage"
                className={styles.Row2}
                rules={[
                  {
                    required: true,
                    message: 'Please enter correct source language'
                  },
                ]}>
                <Select
                  defaultValue="Select source language"
                  allowClear
                  showSearch
                  options={sourceLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
                  className={styles.Input3}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Target Language"
                name="targetLanguage"
                className={styles.Row2}
                rules={[
                  {
                    required: true,
                    message: 'Please enter correct target language'                  
                  },
                ]} >
                <Select
                  defaultValue="Select target language"
                  allowClear
                  showSearch
                  options={targetLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
                  className={styles.Input4}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Estimated Project Size"
                name="projectSize"
                className={styles.Row3}
                rules={[
                  {
                    required: true,
                    message: 'Please enter estimated project size',
                    pattern: /^[0-9]+$/,
                  },
                ]}              >
                <Input autoComplete='off' className={styles.Input5} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Upload Document"
                name="uploadDocument"
                valuePropName="fileList"
                className={styles.Row3}
                getValueFromEvent={normFile}
                rules={[{ required: true, message: 'Please enter Document' }]}
              >
                <Upload 
                beforeUpload={(file) => {
                  const isLt2M = file.size / 1024 / 1024 < 2;
                  if (!isLt2M) {
                    message.error('File must be smaller than 2MB!');
                  }
                  return isLt2M;
                }}
                name="logo" 
                action="/upload.do" 
                listType="text">
                  <Button className={styles.UploadButton} icon={<UploadOutlined />}>Choose Files</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                    type: 'email',
                  },
                ]}
                name="email">
                <Input placeholder="Enter your email" className={styles.Input6} autoComplete='off' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item name="message" rules={[{ message: 'Please enter your message' }]}>
                <TextArea autoSize={{ minRows: 5, maxRows: 6 }} placeholder='Additional Comments...' autoComplete='off' className={styles.TextArea} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button className={styles.Submit_Button} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    </Spin>
  );
};

export default Contact;
