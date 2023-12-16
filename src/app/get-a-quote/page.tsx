'use client';
import { type FC } from 'react';
import React, { useState } from 'react'
import styles from '../styles/QuoteButton.module.css';
import { Button, Col, Dropdown, Select, Form, Input, Row, Space, Upload, message } from 'antd';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { color, motion } from 'framer-motion';
import type { SelectProps } from 'antd';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

const GetaQuote: FC = () => {
  const router = useRouter();
  
  const options: SelectProps['options'] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3001/get-a-quote', values);

      console.log('Server Response:', response.data);
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
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
      <div>
        <h3 className={styles.quote_heading}>Get a quote</h3>
        <p className={styles.quote_paragraph}>
          Let&apos;s get in touch! Share your contact and project details with us, and we&apos;ll make
          sure to get back to you soon. Can&apos;t wait to hear from you
        </p>
        <div className={styles.contact_container}>
          <Form
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
                  label="Email Address"
                  name="email"
                  className={styles.emailRow}
                  rules={[{ required: true, message: 'Please enter your email' }]}
                >
                  <Input placeholder="Your Email Address" autoComplete='off' className={styles.Input2} />
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
                  <Select
                    mode="tags"
                    placeholder="Select source language"
                    options={options}
                    className={styles.Select}
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
                  rules={[{ required: true, message: 'Please select target language' }]}
                >
                  <Select
                    mode="tags"
                    placeholder="Select target language"
                    options={options}
                    className={styles.Select}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  label="Services"
                  name="services"
                  className={styles.Row3}
                  rules={[{ required: true, message: 'Please select Correct Service' }]}
                >
                  <Select
                    mode="tags"
                    options={options}
                    className={styles.Select}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  label="Upload link"
                  name="uploadlink"
                  className={styles.Row3}
                  rules={[{ required: true, message: 'Please Upload the Link' }]}>
                  <Input placeholder="paste link" autoComplete='off' className={styles.Link} />
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
      <Footer />
    </motion.div>
  )
}

export default GetaQuote;