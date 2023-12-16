"use client";
import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { Button, Form, Input, Upload } from 'antd';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sourceLanguage: '',
    targetLanguage: '',
    uploadedFile: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (file: any) => {
    setFormData({
      ...formData,
      uploadedFile: file,
    });
  };

  const handleSubmit = async () => {
    const { name, email, sourceLanguage, targetLanguage, uploadedFile } = formData;

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('sourceLanguage', sourceLanguage);
      formData.append('targetLanguage', targetLanguage);

      if (uploadedFile) {
        formData.append('uploadedFile', uploadedFile);
      }

      const response = await axios.post('http://localhost:3001/contact', formData);

      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
          method="POST"
          className={styles.contact_form}
          onFinish={handleSubmit}
        >
          <Form.Item name="name">
            <Input
              className={styles.input_fields}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              className={styles.input_fields}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="sourceLanguage">
            <Input
              className={styles.input_fields}
              placeholder="Source Language"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="targetLanguage">
            <Input
              className={styles.input_fields}
              placeholder="Target Language"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="uploadedFile">
            <Upload onChange={(info) => handleFileUpload(info.file)}>
              <Button className={styles.upload_button}>Choose Files</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className={styles.contact_button}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
