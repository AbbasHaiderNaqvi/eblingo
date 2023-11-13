'use client';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { type FC } from 'react';
import React, { useState } from 'react'
import styles from '../styles/QuoteButton.module.css';
import { Button, Col, Dropdown, Input, Row, Space, message } from 'antd';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { color, motion } from 'framer-motion';

const GetaQuote: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    translateto: '',
    translatefrom: '',
    estimatedproject: '',
    pastelink: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Russain',
      key: '1',
    },
    {
      label: 'Pakistani',
      key: '2',
    },
    {
      label: 'Franch',
      key: '3',
    },
    {
      label: 'Italian',
      key: '4',
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <form className={styles.contact_form}
          onSubmit={handleSubmit}>
          <h3 className={styles.quote_heading}>Get a quote</h3>
          <p className={styles.quote_paragraph}>
            Let&apos;s get in touch! Share your contact and project details with us, and we&apos;ll make<br />
            sure to get back to you soon. Can&apos;t wait to hear from you
          </p>
          <div className={styles.quote_container}>
            <div className={styles.quote_content}>
              <Row justify="start">
                <Col span={5}>
                  <label className={styles.label_input1}>Name<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
                <Col span={5}>
                  <label className={styles.label_input2}>Phone Number<sup style={{ color: 'red' }}>*</sup></label>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Input
                    className={styles.First_input}
                    placeholder='Your Name'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Input
                    className={styles.Second_input}
                    placeholder='Your Phone Number'
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row justify="start">
                <Col span={5}>
                  <label className={styles.label_input3}>Translate from</label>
                </Col>
                <Col span={5}>
                  <label className={styles.label_input4}>Translate to</label>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                <Space wrap>
                    <Dropdown menu={menuProps}>
                      <Button
                        className={styles.Translateto}
                        value={formData.translateto}
                        onChange={handleChange}
                      >
                        <Space>
                        <DownOutlined /> 
                        </Space>
                        </Button>
                    </Dropdown>
                  </Space>
                </Col>
                <Col>
                  <Space wrap>
                    <Dropdown menu={menuProps}>
                      <Button
                        className={styles.Translateform}
                        value={formData.translatefrom}
                        onChange={handleChange}
                      >
                        <Space>
                        <DownOutlined /> 
                        </Space>
                        </Button>
                    </Dropdown>
                  </Space>
                </Col>
              </Row>
              <Row justify="start">
                <Col span={5}>
                  <label className={styles.label_input5}>Services</label>
                </Col>
                <Col span={5}>
                  <label className={styles.label_input6}>Upload link</label>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Space wrap>
                    <Dropdown menu={menuProps}>
                      <Button 
                      className={styles.Service_Dropdown_Button}>
                        <Space>
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                  </Space>
                </Col>
                <Col>
                <Input
                    className={styles.Upload_input}
                    placeholder='paste link'
                    type="text"
                    name="pastelink"
                    value={formData.pastelink}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Button className={styles.Submit_Button}>Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default GetaQuote;