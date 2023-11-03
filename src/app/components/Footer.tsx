import { ArrowRightOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from '../styles/Footer.module.css';
import { Row, Col, Button, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <div className={styles.rectangle_signup}>
                <div className={styles.signup}>Sign up for Our Newsletter</div>
                <div>
                    <input
                        placeholder='    Your Email'
                        className={styles.signup_input}
                    />
                    <Button
                        className={styles.rectangle_subcribe_button}>
                        Subscribe Now
                    </Button>
                </div>
                <Space className={styles.icons}>
                    <FacebookOutlined style={{ fontSize: '250%' }} />
                    <LinkedinOutlined style={{ fontSize: '250%' }} />
                    <InstagramOutlined style={{ fontSize: '250%' }} />
                </Space>
            </div>
        <footer className={styles.footer}>
        <div className={styles.left}>
        {/* <Image 
        src='/assets/logo.png'
        alt='Logo'
        width={150}
        height={150}
        /> */}
      </div>
            <Row>
                <Col span={8}>
                    <ul className={styles.socialmedia_links}>
                        <li className={styles.links}>Facebook</li>
                        <li className={styles.links}>Instagram</li>
                        <li className={styles.links}>Linkedin</li>
                        <li className={styles.links}>Pinterest</li>
                    </ul>
                    <div>
                        <h3 className={styles.email_heading}>Email Us and Connect with us</h3>
                        <input placeholder='      E-Mail Address      ' className={styles.email_input} />
                        <ArrowRightOutlined style={{ fontSize: '150%' }} className={styles.email_icon} />
                    </div>
                </Col>
                <Col>

                    <div>
                        <ul className={styles.Useful_links}>
                            <li className={styles.list_Bold}>Useful Links</li>
                            <li className={styles.list}>Home</li>
                            <li className={styles.list}>Pages</li>
                            <li className={styles.list}>Services</li>
                            <li className={styles.list}>Blog</li>
                            <li className={styles.list}>Contact Us</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <ul className={styles.services_feild}>
                        <li className={styles.list_Bold}>Services</li>
                        <li className={styles.list}>Technical</li>
                        <li className={styles.list}>Translation</li>
                        <li className={styles.list}>Business</li>
                        <li className={styles.list}>Legal</li>
                        <li className={styles.list}>Medical documents</li>
                    </ul>
                </Col>
                <Col span={6}>
                    <h6 className={styles.recent_heading_main}>Recents</h6>
                    <Row>
                        <Col span={4}>
                            <Image
                                src="/assets/services1.png"
                                alt="Service"
                                width={75}
                                height={75}
                                className={styles.recent_img}
                            />
                        </Col>
                        <Col>
                            <h4 className={styles.recent_heading}>Creating accessible Multilingual Site</h4>
                            <div className={styles.recent_Date}>May 21 2023</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                        <Image
                            src="/assets/services2.png"
                            alt="Service"
                            width={75}
                            height={75}
                            className={styles.recent_img}
                        />
                        </Col>
                        <Col>
                        <h4 className={styles.recent_heading}>How To translate products on your<br />ecommerce store</h4>
                        <div className={styles.recent_Date}>May 21 2023</div>
                        </Col>
                        </Row>
                    
                </Col>
            </Row>
            <div className={styles.legal_terms_h}>
                <div className={styles.reserved_rights}>{new Date().getFullYear()} Eblingo.All right reserved</div>
                <div className={styles.privacy_policy}>Privacy Policy</div>
                <div className={styles.terms_and_condition}> Terms and Conditions</div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
