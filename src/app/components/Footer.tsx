"use client";
import { ArrowRightOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from '../styles/Footer.module.css';
import { Row, Col, Button, Space, Input, Form, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [emailSubscribe, setEmailSubscribe] = useState('');
    const [email, setEmail] = useState('');

// Inside your Footer component

const handleSubscribeClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailSubscribe }),
      });
  
      if (!response.ok) {
        console.error('Failed to send email data');
      } else {
        message.success('Thank you! We will keep you updated');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  
  const handleArrowClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        console.error('Failed to send email data');
      } else {
        message.success('Thank you! We will keep you updated');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  
    return (
        <div>
            <div className={styles.rectangle_signup}>
                <div className={styles.signup}>Sign up for Our Newsletter</div>
                <div className={styles.entry_container}>
                    <Input
                        placeholder='Your Email'
                        value={emailSubscribe}
                        onChange={(e) => setEmailSubscribe(e.target.value)}
                        className={styles.signup_input}
                    />
                    <Button
                        onClick={handleSubscribeClick}
                        className={styles.rectangle_subcribe_button}>
                        Subscribe Now
                    </Button>
                </div>
                <div>
                </div>
            </div>
            <footer>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <Image
                            src="/assets/Home/logo1.png"
                            alt="Logo"
                            width={150}
                            height={70}
                            className={styles.Footer_Logo}
                        />
                        <Space className={styles.Footer_icons2}>
                            <div style={{
                                backgroundColor: '#000',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '8px'
                            }}>
                                <FacebookOutlined style={{
                                    color: 'white',
                                    fontSize: '150%'
                                }} />
                            </div>
                            <div style={{
                                backgroundColor: '#000',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '8px'
                            }}>
                                <LinkedinOutlined style={{
                                    color: 'white',
                                    fontSize: '150%'
                                }} />
                            </div>
                            <div style={{
                                backgroundColor: '#000',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '8px'
                            }}>
                                <InstagramOutlined style={{
                                    color: 'white',
                                    borderRadius: '8px',
                                    fontSize: '150%'
                                }} />
                            </div>
                        </Space>
                        <div className={styles.email_entry}>
                            <h3 className={styles.email_heading}>Connect with us</h3>
                            <input
                                placeholder='E-Mail Address'
                                className={styles.email_input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ArrowRightOutlined
                                style={{ fontSize: '200%' }}
                                onClick={handleArrowClick}
                                className={styles.email_icon} />
                        </div>
                        <div className={styles.reserved_rights}>{new Date().getFullYear()} Eblingo.All right reserved</div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <ul className={styles.socialmedia_links}>
                            <li className={styles.links}>Facebook</li>
                            <li className={styles.links}>Instagram</li>
                            <li className={styles.links}>Linkedin</li>
                            <li className={styles.links}>Pinterest</li>
                        </ul>
                        <Space className={styles.Footer_icons}>
                            <div style={{
                                backgroundColor: '#ED1E78',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '3px'
                            }}>
                                <FacebookOutlined style={{
                                    backgroundColor: '#ED1E78',
                                    fontSize: '150%'
                                }} />
                            </div>
                            <div style={{
                                backgroundColor: '#ED1E78',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '3px'
                            }}>
                                <LinkedinOutlined style={{
                                    backgroundColor: '#ED1E78',
                                    fontSize: '150%'
                                }} />
                            </div>
                            <div style={{
                                backgroundColor: '#ED1E78',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '3px'
                            }}>
                                <InstagramOutlined style={{
                                    backgroundColor: '#ED1E78',
                                    fontSize: '150%'
                                }} />
                            </div>
                        </Space>
                        <div className={styles.term}>
                            <div className={styles.privacy_policy}>Privacy Policy</div>
                            <div className={styles.terms_and_condition}> Terms and Conditions</div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </div>
    );
};

export default Footer;
