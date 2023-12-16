"use client";
import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Button, Col, Row, Input, Form, Upload, Select, message } from 'antd';
import styles from '../styles/Contact.module.css';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import axios, { AxiosResponse } from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';


const Contact: FC = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      console.log(values);
      const response = await axios.post('http://localhost:3001/contact', values);
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
          <Navbar />
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
                rules={[{ required: true, message: 'Please enter your name' }]}>
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
                rules={[{ required: true, message: 'Please enter your phone number' }]}
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
                rules={[{ required: true, message: 'Please select source language' }]}>
                <Input className={styles.Input3} autoComplete='off' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="Target Language"
                name="targetLanguage"
                className={styles.Row2}
                rules={[{ required: true, message: 'Please select target language' }]}
              >
                <Input className={styles.Input4} autoComplete='off' />
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
                rules={[{ required: true, message: 'Please enter estimated project size' }]}
              >
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
                <Upload name="logo" action="/upload.do" listType="text">
                  <Button className={styles.UploadButton} icon={<UploadOutlined />}>Choose Files</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item name="email">
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
      <Footer />
    </motion.div>
  );
};

export default Contact;
