"use client";
import { ArrowRightOutlined, FacebookOutlined,LinkedinOutlined } from '@ant-design/icons';
import styles from '../styles/Footer.module.css';
import { Row, Col, Button, Space, Input, message } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import api from '../axiosInterceptor/axiosInterceptor';

const Footer: React.FC = () => {
    const [emailSubscribe, setEmailSubscribe] = useState('');
    const [email, setEmail] = useState('');
    const handleSubscribeClick = async () => {
        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailSubscribe)) {
                message.error('Please enter a valid email address');
                return;
            }

            const response = await api.post('/email', { email: emailSubscribe });

            if (response.status !== 200) {
                message.success('Thank you! We will keep you updated');
            } else {
                message.error('Failed to send email');

            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleArrowClick = async () => {
        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                message.error('Please enter a valid email address');
                return;
            }

            const response = await api.post('/email', { email });

            if (response.status !== 200) {
                message.success('Thank you! We will keep you updated');
            } else {
                message.error('Failed to send email');
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
                            src="https://tinypic.host/images/2024/01/25/logo1.webp"
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
                            <a className={styles.media_links} href="https://www.facebook.com/profile.php?id=61555814184309" target="_blank" rel="noopener noreferrer">
                                <FacebookOutlined style={{
                                    color: 'white',
                                    fontSize: '150%'
                                }} />
                            </a>
                            </div>
                            <div style={{
                                backgroundColor: '#000',
                                width: '43px',
                                height: '43px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '8px'
                            }}>
                                <a className={styles.media_links} href="https://www.linkedin.com/company/eblingo/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                    <LinkedinOutlined style={{
                                        color: 'white',
                                        fontSize: '150%'
                                    }} />
                                </a>
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
                            <li className={styles.facebooklinks}>
                                <a className={styles.media_links} href="https://www.facebook.com/profile.php?id=61555814184309" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                    <div style={{
                                        marginTop: '45%',
                                        backgroundColor: '#ED1E78',
                                        width: '43px',
                                        height: '43px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        borderRadius: '3px'
                                    }}>
                                        <FacebookOutlined style={{
                                            backgroundColor: '#ED1E78',
                                            fontSize: '150%',
                                            color: '#fff'
                                        }} />
                                    </div>
                                </a>
                            </li>
                            <li className={styles.linkedinlinks}>
                                <a className={styles.media_links} href="https://www.linkedin.com/company/eblingo/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                    Linkedin
                                    <div style={{
                                        marginTop: '55%',
                                        backgroundColor: '#ED1E78',
                                        width: '43px',
                                        height: '43px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        borderRadius: '3px'
                                    }}>
                                        <LinkedinOutlined style={{
                                            backgroundColor: '#ED1E78',
                                            fontSize: '150%',
                                            color: '#fff'
                                        }} />
                                    </div>
                                </a>
                            </li>
                        </ul>
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
