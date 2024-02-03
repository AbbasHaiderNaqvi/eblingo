"use client";
import React, { useEffect, useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { Button, Form, Input, Select, Upload, message } from 'antd';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import api from '../axiosInterceptor/axiosInterceptor';

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

        sourceLangs.sort((a, b) => a.label.localeCompare(b.label));
        targetLangs.sort((a, b) => a.label.localeCompare(b.label));

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
      const { name, email, sourceLanguage, targetLanguage } = values;

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('sourceLanguage', sourceLanguage);
      formData.append('targetLanguage', targetLanguage);

      console.log(values);
      const response = await api.post('/contact', values);
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
              },
            ]}
          >
            <Select
              defaultValue="Select source language"
              allowClear
              showSearch
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
              },
            ]}
          >
            <Select
              defaultValue="Select target language"
              allowClear
              showSearch
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
            <Upload
              beforeUpload={(file) => {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                  message.error('File must be smaller than 2MB!');
                }
                return isLt2M;
              }}
            >
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
