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
                  <label className={styles.L1_input}>Name<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
                <Col span={5}>
                  <label className={styles.L2_Input}>Phone Number<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
              </Row>
          <Row>
            <Col>
              <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                <Input className={styles.F_input} placeholder='Your Name' autoComplete='off'/>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                <Input className={styles.S_input} placeholder='Your Phone Number' autoComplete='off'/>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start">
                <Col span={5}>
                  <label className={styles.L3_Input}>Source Language</label>
                </Col>
                <Col span={5}>
                  <label className={styles.L4_Input}>Target Language</label>
                </Col>
              </Row>
          <Row>
            <Col>
              <Form.Item name="sourceLanguage">
                <Input className={styles.T_input} autoComplete='off'/>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="targetLanguage">
                <Input className={styles.F_input} autoComplete='off'/>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start">
                <Col span={6}>
                <Form.Item >
                  <label className={styles.L5_Input}>Estimated project size</label>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <label className={styles.L6_Input}>Documents Upload</label>
                </Col>
              </Row>
          <Row>
            <Col lg={12} xl={12}>
              <Form.Item name="projectSize">
                <Input className={styles.Fi_input} autoComplete='off'/>
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
            <Input className={styles.Six_Input}placeholder='Your Email Address' autoComplete='off'/>
          </Form.Item>

          <Form.Item name="additionalComments">
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 6 }} placeholder='Additional Comments...' autoComplete='off'className={styles.Seven_input}/>
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
