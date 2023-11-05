import { type FC } from 'react';
import React, { useState } from 'react'
import styles from '../styles/Contact.module.css';
import { Button, Col, Row } from 'antd';
import UploadButton from '../Animations/UploadButton';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sourceLanguage: '',
    targetLanguage: '',
    estimatedproject: '',
    additionalcomments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement >) => {
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
  return (
    <div>
      <div className={styles.HeroSection}>
        <h1 className={styles.HeroSection_Heading}>Contact Us</h1>
        <h5 className={styles.contact_Sub_heading}>Home / Services / Translation</h5>
      </div>
      <div>
        <form className={styles.contact_form}
          onSubmit={handleSubmit}>
          <h3 className={styles.contact_heading}>Contact Us</h3>
          <div className={styles.contact_container}>
            <div className={styles.contact_content}>
              <Row>
                <Col span={10}>
                  <input
                    className={styles.First_input}
                    placeholder='    Your Name  '
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <input
                    className={styles.Second_input}
                    placeholder='   Your Phone Number  '
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
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
                <Col span={10}>
                  <input
                    className={styles.First_input}
                    type="text"
                    name="sourceLanguage"
                    value={formData.sourceLanguage}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <input
                    className={styles.Second_input}
                    type="text"
                    name="targetLanguage"
                    value={formData.targetLanguage}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col span={14}>
                  <label className={styles.label_input5}>Estimated project size</label>
                  <input
                    className={styles.Fifth_input}
                    type="text"
                    name="estimatedproject"
                    value={formData.estimatedproject}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <label className={styles.label_input6}>Documents Upload</label>
                  <UploadButton />
                </Col>
              </Row>
              <input
                className={styles.Sixth_input}
                placeholder='   Your Email Address   '
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className={styles.Seven_input}
                placeholder='   Additional Comments...   '
                name="additionalcomments"
                value={formData.additionalcomments}
                onChange={handleChange}
              />
              <Button className={styles.Submit_Button}>Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;