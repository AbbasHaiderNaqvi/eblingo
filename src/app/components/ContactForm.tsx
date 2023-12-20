"use client";
import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { Button, Form, Input, Upload, message } from 'antd';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import api from '../axiosInterceptor/axiosInterceptor';

const ContactForm: React.FC = () => {

  const onFinish = async (values: any) => {
    try {
      console.log(values);
      const response = await api.post('/contact', values);
      console.log('Form data submitted successfully:', response.data);
      message.success('Thank you! We will contact you soon');
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
      <div className={styles.contact_container}>
        <h1 className={styles.heading}>Contact Us!!</h1>
        <Form
          method='POST'
          name="contactForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter your correct name',
                pattern: /^[A-Za-z ]+$/,
              },
            ]}
          >
            <Input
              className={styles.input_fields}
              placeholder="Your Name"
            />
          </Form.Item>
          <Form.Item
            name="email"

          >
            <Input
              className={styles.input_fields}
              placeholder="Your Email"
            />
          </Form.Item>
          <Form.Item
            name="sourceLanguage"
            rules={[
              {
                required: true,
                message: 'Please enter correct source language',
                pattern: /^[A-Za-z]+$/,
              },
            ]}
          >
            <Input
              className={styles.input_fields}
              placeholder="Source Language"
            />
          </Form.Item>
          <Form.Item
            name="targetLanguage"
            rules={[
              {
                required: true,
                message: 'Please enter correct target language',
                pattern: /^[A-Za-z]+$/,
              },
            ]}
          >
            <Input
              className={styles.input_fields}
              placeholder="Target Language"
            />
          </Form.Item>
          <Form.Item
            name="uploadDocument"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Please enter Document' }]}
          >
            <Upload name="logo" action="/upload.do" listType="text">
              <Button className={styles.upload_button}>Choose Files</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button className={styles.contact_button} htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
