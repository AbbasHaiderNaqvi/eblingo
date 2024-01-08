"use client";
import React, { useEffect, useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { Button, Form, Input, Select, Upload, message } from 'antd';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import api from '../axiosInterceptor/axiosInterceptor';
import FileUploadComponent from '../FileUpload/ContactForm';

interface Language {
  value: string;
  label: string;
  type: string;
}

const ContactForm: React.FC = () => {
  const [sourceLanguages, setSourceLanguages] = useState<Language[]>([]);
  const [targetLanguages, setTargetLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/getlanguages');
        const languages: Language[] = response.data;

        const sourceLangs = languages.filter(lang => lang.type === 'source');
        const targetLangs = languages.filter(lang => lang.type === 'target');

        setSourceLanguages(sourceLangs);
        setTargetLanguages(targetLangs);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchData();
  }, []);

  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('uploadDocument', values.uploadDocument[0].originFileObj);

      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('sourceLanguage', values.sourceLanguage);
      formData.append('targetLanguage', values.targetLanguage);

      console.log(values);
      const response = await api.post('/contact', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form data submitted successfully:', response.data);
      message.success('Thank you! We will contact you soon');
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Error submitting form. Please try again.');
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
  const handleFileChange = (file: File | null) => {
    // Handle the file change logic here
    console.log('Selected file:', file);
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
            <Select
              defaultValue="Select source language"
              options={sourceLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
              className={styles.input_fields}
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
            <Select
              defaultValue="Select target language"
              options={targetLanguages.map(lang => ({ value: lang.value, label: lang.label }))}
              className={styles.input_fields}
            />
          </Form.Item>
          <Form.Item
            name="uploadDocument"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Please upload a document' }]}
          >
          <FileUploadComponent onFileChange={handleFileChange} />
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
