"use client";
import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Button, Col, Row, Input, Form, Upload } from 'antd';
import styles from '../styles/Contact.module.css';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';
import axios, { AxiosResponse } from 'axios';
import { UploadOutlined } from '@ant-design/icons';


const Contact: FC = () => {
  const onFinish = (values: any) => {
    console.log('Form data:', values);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Contact Us</h1>
        <h5 className={styles.contact_Sub_heading}>Home / Services / Translation</h5>
      </div>
      <div className={styles.contact_heading_main}>
        Contact Us
      </div>
      <div className={styles.contact_container}>
        <Form onFinish={onFinish}>
        <Row justify="start">
                <Col span={5}>
                  <label className={styles.label_input3}>Name<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
                <Col span={5}>
                  <label className={styles.label_input4}>Phone Number<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
              </Row>
          <Row>
            <Col>
              <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                <Input className={styles.First_input} />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                <Input className={styles.Second_input} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start">
                <Col span={5}>
                  <label className={styles.label_input3}>Source Language</label>
                </Col>
                <Col span={5}>
                  <label className={styles.label_input4}>Target Language</label>
                </Col>
              </Row>
          <Row>
            <Col>
              <Form.Item name="sourceLanguage">
                <Input className={styles.Second_input} />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="targetLanguage">
                <Input className={styles.First_input} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start">
                <Col span={6}>
                  <label className={styles.label_input5}>Estimated project size</label>
                </Col>
                <Col span={6}>
                  <label className={styles.label_input6}>Documents Upload</label>
                </Col>
              </Row>
          <Row>
            <Col lg={12} xl={12}>
              <Form.Item name="projectSize">
                <Input className={styles.First_input} />
              </Form.Item>
            </Col>
            <Col lg={4} xl={6}>
            <Form.Item name="uploadDocument">
              <Upload>
                <Button className={styles.uploadbutton} icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            </Col>
          </Row>
          
          <Form.Item name="email" rules={[{ type: 'email', message: 'Please enter a valid email address!' }]}>
            <Input className={styles.Sixth_input} />
          </Form.Item>

          <Form.Item name="additionalComments">
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 6 }} placeholder='Additional Comments...' className={styles.Seven_input}/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className={styles.Submit_Button} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
