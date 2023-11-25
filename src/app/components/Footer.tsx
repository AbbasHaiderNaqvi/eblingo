import { ArrowRightOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from '../styles/Footer.module.css';
import { Row, Col, Button, Space, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <div className={styles.rectangle_signup}>
                <div className={styles.signup}>Sign up for Our Newsletter</div>
                
                    <Input
                        placeholder='Your Email'
                        className={styles.signup_input}
                    />
                    <Button
                        className={styles.rectangle_subcribe_button}>
                        Subscribe Now
                    </Button>
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
                        <div className={styles.email_entry}>
                            <h3 className={styles.email_heading}>Connect with us</h3>
                            <input placeholder='E-Mail Address' className={styles.email_input} />
                            <ArrowRightOutlined style={{ fontSize: '150%' }} className={styles.email_icon} />
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
